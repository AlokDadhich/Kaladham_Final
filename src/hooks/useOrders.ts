import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

export interface Order {
  id: string;
  user_id: string | null;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  customer_city: string;
  customer_pincode: string;
  total_amount: number;
  payment_method: string;
  order_status: string;
  created_at: string;
  updated_at: string;
  order_items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string | null;
  product_name: string;
  product_price: number;
  quantity: number;
  subtotal: number;
  created_at: string;
}

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isAdmin } = useAuth();

  const fetchOrders = async () => {
    try {
      setLoading(true);
      let query = supabase.from('orders').select(`
        *,
        order_items (*)
      `);

      // If not admin, only fetch user's orders
      if (!isAdmin && user) {
        query = query.eq('user_id', user.id);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user || isAdmin) {
      fetchOrders();
    }
  }, [user, isAdmin]);

  const createOrder = async (orderData: {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    customer_address: string;
    customer_city: string;
    customer_pincode: string;
    total_amount: number;
    items: Array<{
      product_id: string;
      product_name: string;
      product_price: number;
      quantity: number;
    }>;
  }) => {
    try {
      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([{
          user_id: user?.id || null,
          customer_name: orderData.customer_name,
          customer_email: orderData.customer_email,
          customer_phone: orderData.customer_phone,
          customer_address: orderData.customer_address,
          customer_city: orderData.customer_city,
          customer_pincode: orderData.customer_pincode,
          total_amount: orderData.total_amount,
          payment_method: 'cash_on_delivery',
          order_status: 'pending'
        }])
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = orderData.items.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.product_name,
        product_price: item.product_price,
        quantity: item.quantity,
        subtotal: item.product_price * item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      await fetchOrders();
      return order;
    } catch (err) {
      throw err;
    }
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ order_status: status, updated_at: new Date().toISOString() })
        .eq('id', orderId);

      if (error) throw error;
      await fetchOrders();
    } catch (err) {
      throw err;
    }
  };

  return {
    orders,
    loading,
    error,
    fetchOrders,
    createOrder,
    updateOrderStatus
  };
};