import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useOrders } from '@/hooks/useOrders';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const OrderManagement = () => {
  const { orders, loading, updateOrderStatus } = useOrders();
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = orders.filter(order => 
    statusFilter === 'all' || order.order_status === statusFilter
  );

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      toast({
        title: "Order updated",
        description: "Order status has been updated successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update order status",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading orders...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Order Management</h2>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Order #{order.id.slice(0, 8)}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(order.created_at), 'PPP')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">₹{(order.total_amount / 100).toLocaleString()}</div>
                  <Badge className={getStatusColor(order.order_status)}>
                    {order.order_status.charAt(0).toUpperCase() + order.order_status.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Customer Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Name:</strong> {order.customer_name}</p>
                    <p><strong>Email:</strong> {order.customer_email}</p>
                    <p><strong>Phone:</strong> {order.customer_phone}</p>
                    <p><strong>Address:</strong> {order.customer_address}</p>
                    <p><strong>City:</strong> {order.customer_city} - {order.customer_pincode}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Order Items</h4>
                  <div className="space-y-2">
                    {order.order_items?.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.product_name} x {item.quantity}</span>
                        <span>₹{(item.subtotal / 100).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Payment: {order.payment_method.replace('_', ' ').toUpperCase()}
                </div>
                <div className="flex space-x-2">
                  <Select 
                    value={order.order_status} 
                    onValueChange={(value) => handleStatusUpdate(order.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No orders found</p>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;