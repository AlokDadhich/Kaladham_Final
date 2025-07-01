import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const { user, isAdmin, signInWithGoogle, adminLogin } = useAuth();
  const [adminCredentials, setAdminCredentials] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  if (isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: "Please try again",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const success = await adminLogin(adminCredentials.email, adminCredentials.password);
      
      if (success) {
        toast({
          title: "Admin login successful",
          description: "Welcome to the admin panel"
        });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please try again",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Welcome to Kaladham
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="user">User Login</TabsTrigger>
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
            </TabsList>
            
            <TabsContent value="user" className="space-y-4">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Sign in to place orders and track your purchases
                </p>
                <Button 
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? 'Signing in...' : 'Continue with Google'}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="admin" className="space-y-4">
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    value={adminCredentials.email}
                    onChange={(e) => setAdminCredentials(prev => ({
                      ...prev,
                      email: e.target.value
                    }))}
                    placeholder="admin@kaladham.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input
                    id="admin-password"
                    type="password"
                    value={adminCredentials.password}
                    onChange={(e) => setAdminCredentials(prev => ({
                      ...prev,
                      password: e.target.value
                    }))}
                    placeholder="Enter admin password"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? 'Signing in...' : 'Admin Login'}
                </Button>
              </form>
              <div className="text-xs text-muted-foreground text-center">
                Demo credentials: admin@kaladham.com / admin123
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;