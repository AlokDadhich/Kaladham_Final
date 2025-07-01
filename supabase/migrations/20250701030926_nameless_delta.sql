/*
  # Complete Authentication and Product Management System

  1. New Tables
    - `profiles` - User profiles linked to Supabase auth
    - `admins` - Admin users with simple email/password
    - `products` - Product catalog with full details
    - `orders` - Order management
    - `order_items` - Order line items

  2. Security
    - Enable RLS on all tables
    - Add policies for users, admins, and public access
    - Secure admin operations

  3. Functions
    - Admin authentication function
    - Product management functions
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table for authenticated users
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create admins table for admin authentication
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  full_name text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL, -- Price in paise/cents
  image_url text NOT NULL,
  category text NOT NULL,
  features text[] DEFAULT '{}',
  artisan text,
  is_active boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  customer_city text NOT NULL,
  customer_pincode text NOT NULL,
  total_amount integer NOT NULL, -- Total in paise/cents
  payment_method text DEFAULT 'cash_on_delivery',
  order_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  product_name text NOT NULL,
  product_price integer NOT NULL,
  quantity integer NOT NULL,
  subtotal integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Products policies (public read, admin write)
CREATE POLICY "Anyone can read active products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Admins can manage products"
  ON products
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE email = auth.jwt() ->> 'email' 
      AND is_active = true
    )
  );

-- Orders policies
CREATE POLICY "Users can read own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create orders"
  ON orders
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Admins can read all orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE email = auth.jwt() ->> 'email' 
      AND is_active = true
    )
  );

CREATE POLICY "Admins can update orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE email = auth.jwt() ->> 'email' 
      AND is_active = true
    )
  );

-- Order items policies
CREATE POLICY "Users can read own order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE orders.id = order_items.order_id 
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create order items"
  ON order_items
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Admins can read all order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE email = auth.jwt() ->> 'email' 
      AND is_active = true
    )
  );

-- Admin policies (very restrictive)
CREATE POLICY "Admins can read admin table"
  ON admins
  FOR SELECT
  TO authenticated
  USING (
    email = auth.jwt() ->> 'email' 
    AND is_active = true
  );

-- Functions for admin authentication
CREATE OR REPLACE FUNCTION authenticate_admin(admin_email text, admin_password text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  admin_record admins;
  result json;
BEGIN
  -- Find admin by email
  SELECT * INTO admin_record
  FROM admins
  WHERE email = admin_email AND is_active = true;

  -- Check if admin exists and password matches (in production, use proper hashing)
  IF admin_record.id IS NOT NULL AND admin_record.password_hash = crypt(admin_password, admin_record.password_hash) THEN
    result := json_build_object(
      'success', true,
      'admin', json_build_object(
        'id', admin_record.id,
        'email', admin_record.email,
        'full_name', admin_record.full_name
      )
    );
  ELSE
    result := json_build_object('success', false, 'message', 'Invalid credentials');
  END IF;

  RETURN result;
END;
$$;

-- Function to handle user profile creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name'),
    NEW.raw_user_meta_data ->> 'avatar_url'
  );
  RETURN NEW;
END;
$$;

-- Trigger for automatic profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Insert default admin (password: admin123)
INSERT INTO admins (email, password_hash, full_name) 
VALUES (
  'admin@kaladham.com',
  crypt('admin123', gen_salt('bf')),
  'Kaladham Administrator'
) ON CONFLICT (email) DO NOTHING;

-- Insert sample products from existing data
INSERT INTO products (id, name, description, price, image_url, category, features, artisan, stock_quantity) VALUES
('1', 'Coconut Shell Bowl Medium', 'Handcrafted coconut shell bowl, perfect for serving snacks or as a decorative piece.', 1299, '/lovable-uploads/56f0da78-8980-45a3-acea-5fc2fbd2115a.png', 'Decorative Collection', ARRAY['Natural coconut shell', 'Food-safe finish', 'Eco-friendly', 'Handmade'], 'Priya Nair', 10),
('2', 'Tea Spoon', 'Beautiful tea spoon made from coconut shell, natural and durable.', 299, '/lovable-uploads/d8fb40cc-b869-4a0c-b1d3-34b9437af59c.png', 'Functional Art', ARRAY['Lightweight', 'Natural texture', 'Heat resistant', 'Handmade'], 'Ravi Kumar', 25),
('3', 'Tea Light Candle Holder', 'Beautiful flower-shaped candle stand for warm lighting in your home.', 899, '/lovable-uploads/7712b71a-282d-496c-85db-e28dd9a0d428.png', 'Decorative Collection', ARRAY['Artistic design', 'Hand-carved patterns', 'Warm lighting', 'Eco-friendly'], 'Meera Devi', 15),
('4', 'Incense Stick Stand', 'Traditional incense stand, ideal for prayer and meditation.', 799, '/lovable-uploads/20426697-b36d-4ef1-80a3-a0c426072ee7.png', 'Functional Art', ARRAY['Stable base', 'Ash collector', 'Natural finish', 'Durable'], 'Suresh Pillai', 20),
('5', 'Pen Stand A', 'Beautiful pen stand for office and home, with space for multiple pens.', 699, '/lovable-uploads/20392ea2-ec5e-40bb-af17-84e5f8d5c97d.png', 'Functional Art', ARRAY['Multi-slot design', 'Stable base', 'Compact size', 'Handmade'], 'Lakshmi Menon', 12)
ON CONFLICT (id) DO NOTHING;