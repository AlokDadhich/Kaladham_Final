
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Kaladham</h3>
            <p className="text-sm opacity-90 mb-4">
              Crafting Tradition, Sustaining Nature
            </p>
            <p className="text-xs opacity-75">
              Supported by JSW Foundation
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/shop" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Shop
              </Link>
              <Link to="/artisans" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Artisans
              </Link>
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Mission</h4>
            <p className="text-sm opacity-90">
              Preserving ancient coconut shell craft traditions while empowering village artisans and promoting sustainable practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Village Craft Center</p>
              <p>Kerala, India</p>
              <p>info@kaladham.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Kaladham. All rights reserved. Proudly supported by JSW Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
