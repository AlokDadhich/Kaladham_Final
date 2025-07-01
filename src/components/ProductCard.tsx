import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/hooks/useProducts';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      category: product.category
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <div className="text-xl font-bold text-primary">₹{product.price}</div>
        {product.artisan && (
          <div className="text-xs text-muted-foreground mt-1">By {product.artisan}</div>
        )}
        <div className="text-xs text-muted-foreground mt-1">Stock: {product.stock_quantity}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Button asChild variant="outline" className="w-full h-10">
          <Link to={`/product/${product.id}`}>View Details</Link>
        </Button>
        <Button 
          onClick={handleAddToCart} 
          className="w-full h-10"
          disabled={product.stock_quantity === 0}
        >
          {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;