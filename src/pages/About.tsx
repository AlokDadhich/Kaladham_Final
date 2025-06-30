
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">About Us</Badge>
        <h1 className="text-5xl font-bold text-primary mb-6">About Kaladham</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Preserving 500+ years of tradition while empowering rural communities through sustainable craft practices
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-muted/30 rounded-xl p-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6">Our Mission</Badge>
            <h2 className="text-4xl font-bold text-primary mb-6">House of Arts</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kaladham - meaning "House of Arts" - is dedicated to preserving the ancient craft of coconut shell art and 
              creating sustainable livelihoods for village communities.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through our partnership with JSW Foundation, we transform discarded coconut shells into beautiful, functional art pieces, 
              proving that sustainability and tradition can flourish together.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">₹50L+</div>
                <div className="text-sm text-muted-foreground">Annual Artisan Income</div>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Women Artisans</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/ca2ce2bc-59d2-4992-b031-e36b82f0c13e.png" 
              alt="Traditional coconut shell craft artisan at work" 
              className="rounded-xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-primary">JSW</div>
              <div className="text-sm text-muted-foreground">Foundation Partner</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Sections */}
      <div className="space-y-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">Ancient Craft</Badge>
            <h2 className="text-3xl font-bold text-primary mb-6">500+ Years of Living Tradition</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Coconut shell art is an ancient craft form that has been practiced in Kerala for over 500 years. 
              What began as a way to use every part of the coconut has evolved into a sophisticated art form 
              that combines utility with aesthetic beauty.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Each piece requires specialized skills that have been passed down through generations - from selecting the right shells to 
              mastering intricate carving patterns that tell stories of our cultural heritage.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">25+ different craft techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Natural and eco-friendly</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Time-honored methods</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/26cbb53a-09b2-4595-8d00-9b3afb1653d7.png" 
              alt="History of coconut shell craft" 
              className="rounded-xl shadow-xl w-full"
            />
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground p-4 rounded-lg">
              <div className="text-lg font-bold">500+</div>
              <div className="text-xs">Years Old</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="/lovable-uploads/f0cc483d-79d8-461a-b637-212f050e9726.png" 
              alt="JSW Foundation support" 
              className="rounded-xl shadow-xl w-full"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-lg font-bold text-primary">2020</div>
              <div className="text-xs text-muted-foreground">Partnership Started</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4">JSW Foundation Partnership</Badge>
            <h2 className="text-3xl font-bold text-primary mb-6">Empowerment and Growth</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our partnership with JSW Foundation enables us to expand our impact while maintaining the authenticity 
              of traditional craftsmanship. This support helps us provide training, tools, and market access to artisan communities.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Together, we're building a sustainable ecosystem where ancient arts thrive in the modern world, 
              creating dignity and prosperity for rural craftspeople.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">₹15L</div>
                <div className="text-sm text-muted-foreground">Avg Annual Artisan Income Increase</div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Production Capacity Growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Training and Skills Development */}
        <div className="bg-primary/5 rounded-xl p-12">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Skills Development</Badge>
            <h2 className="text-3xl font-bold text-primary mb-6">Training and Capacity Building</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive training programs teach traditional skills to youth and women
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Traditional Techniques</h3>
              <p className="text-muted-foreground">6-month intensive training program</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Skills</h3>
              <p className="text-muted-foreground">Entrepreneurship and market understanding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">Eco-friendly practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Values</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">What Drives Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="font-semibold text-primary mb-4 text-lg">Sustainability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming waste into beautiful, functional products while protecting our environment
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="font-semibold text-primary mb-4 text-lg">Tradition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Preserving 500+ years of cultural heritage and traditional craftsmanship
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="font-semibold text-primary mb-4 text-lg">Community</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering rural artisans with skills, tools, and sustainable livelihoods
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="font-semibold text-primary mb-4 text-lg">Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every piece handcrafted with attention to detail and cultural authenticity
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Impact Numbers */}
      <div className="bg-primary text-primary-foreground rounded-xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-5xl font-bold mb-3">50+</div>
            <div className="text-sm opacity-90">Skilled Artisans</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-3">15</div>
            <div className="text-sm opacity-90">Villages Reached</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-3">5000+</div>
            <div className="text-sm opacity-90">Products Created</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-3">200+</div>
            <div className="text-sm opacity-90">Families Supported</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
