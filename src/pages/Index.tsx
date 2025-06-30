import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="hero-bg text-primary-foreground py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-lg bg-white/20 backdrop-blur-sm border-white/30">
            Supported by JSW Foundation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Kaladham <span className="text-4xl md:text-5xl">कलाधाम</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-6 opacity-95 drop-shadow-lg">
            Crafting Tradition, Sustaining Nature
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-85 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Discover authentic coconut shell crafts handmade by skilled village artisans with 500+ years of tradition. 
            Every piece tells a story, supported by JSW Foundation.
          </p>
          <div className="space-x-4 space-y-4 md:space-y-0">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/artisans">Meet Our Artisans</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Heritage and Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Badge variant="outline" className="mb-4">Cultural Heritage</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                500+ Years of Living Tradition
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Coconut shell art is an ancient craft form that has been practiced in Kerala for over 500 years. 
                Our artisans continue this glorious tradition, transforming waste into beautiful, functional pieces of art.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Each piece is carefully handcrafted using techniques passed down through generations, 
                ensuring that every product carries the soul of traditional Indian craftsmanship.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Years of Tradition</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Skilled Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Villages Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Craft Techniques</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://orumindicus.com/wp-content/uploads/2023/02/AWXSAW.png" 
                alt="Artisan creating coconut shell craft" 
                className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Handmade</div>
              </div>
            </div>
          </div>

          {/* Process and Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6">🥥</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Natural Raw Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only natural coconut shells that would otherwise go to waste. 
                  This is part of our eco-friendly vision.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6">👥</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Community Empowerment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Together with JSW Foundation, we provide rural artisans with training, tools and market access.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6">✨</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Quality and Authenticity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece is handcrafted with cultural authenticity and attention to detail. 
                  Quality is our priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Products</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Artisan Creations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated collection of handmade coconut shell art pieces. 
              Each product is a unique blend of tradition and modernity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Categories</Badge>
            <h2 className="text-4xl font-bold text-primary mb-6">Our Collections</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our handmade products available across different categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/56f0da78-8980-45a3-acea-5fc2fbd2115a.png" 
                  alt="Decorative Collection" 
                  className="w-full h-56 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-primary mb-4">Decorative Collection</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Bowls, decorative flowers, and artistic pieces that bring natural beauty to your home
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/shop?category=Decorative Collection">View Collection</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/d8fb40cc-b869-4a0c-b1d3-34b9437af59c.png" 
                  alt="Functional Art" 
                  className="w-full h-56 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-primary mb-4">Functional Art</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Tea sets, vases, and daily use items that combine utility with traditional aesthetics
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/shop?category=Functional Art">View Collection</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/ca2ce2bc-59d2-4992-b031-e36b82f0c13e.png" 
                  alt="Religious Collection" 
                  className="w-full h-56 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-primary mb-4">Religious Collection</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hand-carved religious pieces perfect for adding cultural elegance to any space
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/shop?category=Religious Collection">View Collection</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* JSW Foundation Partnership */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Artisan Community</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8 leading-relaxed">
              With support from JSW Foundation, we're not just preserving traditional crafts – we're empowering entire village communities. 
              Through our program, local artisans receive sustainable livelihoods while keeping ancient techniques alive for future generations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">200+</div>
              <div className="text-lg opacity-90">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">5000+</div>
              <div className="text-lg opacity-90">Products Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">100%</div>
              <div className="text-lg opacity-90">Eco-Friendly</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">15</div>
              <div className="text-lg opacity-90">Villages Reached</div>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/artisans">Meet Our Artisans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
