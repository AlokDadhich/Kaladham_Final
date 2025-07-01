import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';

const categories = [
  'All',
  'Decorative Collection',
  'Functional Art',
  'Wall Art and Frames',
  'Religious Collection'
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('name');
  const { products, loading } = useProducts();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, selectedCategory, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-lg">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge variant="outline" className="mb-4">Our Collection</Badge>
        <h1 className="text-5xl font-bold text-primary mb-6">Our Craft Collection</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover authentic coconut shell crafts handmade by skilled village artisans
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(category)}
              className="text-sm px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Count */}
      <div className="mb-8">
        <p className="text-muted-foreground">
          {filteredAndSortedProducts.length} products found
          {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-3xl font-semibold text-muted-foreground mb-6">No Products Found</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Try adjusting your filters or browse all categories
          </p>
          <Button onClick={() => handleCategoryChange('All')} size="lg" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default Shop;