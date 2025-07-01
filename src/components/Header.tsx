import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart();
  const { user, isAdmin, signOut, adminLogout } = useAuth();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Artisans', path: '/artisans' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    if (isAdmin) {
      adminLogout();
    } else {
      await signOut();
    }
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/135abe21-6cde-4bbf-b3a7-f69421a926e4.png"
              alt="Kaladham Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/admin') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                Admin
              </Link>
            )}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            {user || isAdmin ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {user && (
                    <DropdownMenuItem>
                      <span className="text-sm">{user.email}</span>
                    </DropdownMenuItem>
                  )}
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/admin">Admin Dashboard</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="text-sm">Admin Panel</span>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/login">Login</Link>
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/admin') ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;