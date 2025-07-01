import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useOrders } from '@/hooks/useOrders';
import { Minus, Plus, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const { user } = useAuth();
  const { createOrder } = useOrders();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: user?.user_metadata?.full_name || user?.user_metadata?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;

    // Validate customer information
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'pincode'];
    const missingFields = requiredFields.filter(field => !customerInfo[field].trim());

    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: `Please fill in: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return;
    }

    setIsCheckingOut(true);

    try {
      // Prepare order data
      const orderData = {
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone,
        customer_address: customerInfo.address,
        customer_city: customerInfo.city,
        customer_pincode: customerInfo.pincode,
        total_amount: total * 100, // Convert to paise
        items: items.map(item => ({
          product_id: item.id,
          product_name: item.name,
          product_price: item.price * 100, // Convert to paise
          quantity: item.quantity
        }))
      };

      await createOrder(orderData);
      clearCart();
      
      toast({
        title: "Order placed successfully!",
        description: "You'll receive a confirmation email shortly. Our team will contact you for delivery.",
      });
      
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: ''
      });
    } catch (error) {
      toast({
        title: "Order failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-primary mb-8">Your Cart is Empty</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover our beautiful collection of handcrafted coconut shell art
        </p>
        <Button asChild size="lg">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                    <p className="text-lg font-bold text-primary">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-lg font-bold">
                    ₹{item.price * item.quantity}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="space-y-6">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Complete delivery address"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={customerInfo.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    value={customerInfo.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    placeholder="6-digit pincode"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Payment Method</span>
                <span>Cash on Delivery</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
              <Button 
                onClick={handleCheckout} 
                className="w-full" 
                size="lg"
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Placing Order...' : 'Place Order (Cash on Delivery)'}
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
              <div className="text-xs text-muted-foreground text-center">
                <p>Cash on Delivery • Free shipping on all orders</p>
                <p>Supporting village artisans with every purchase</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;