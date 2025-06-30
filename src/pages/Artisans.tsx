
import { Card, CardContent } from '@/components/ui/card';

const artisans = [
  {
    name: 'Priya Nair',
    experience: '15 years',
    specialty: 'Decorative Bowls',
    story: 'Priya learned the craft from her grandmother and has been perfecting bowl-making techniques for over a decade.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop'
  },
  {
    name: 'Ravi Kumar',
    experience: '20 years',
    specialty: 'Functional Art',
    story: 'A master craftsman who specializes in creating everyday items that blend utility with traditional aesthetics.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
  },
  {
    name: 'Meera Devi',
    experience: '25 years',
    specialty: 'Wall Art & Carvings',
    story: 'Known for her intricate carving patterns, Meera has won several awards for preserving traditional designs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
  },
  {
    name: 'Suresh Pillai',
    experience: '18 years',
    specialty: 'Lamps & Lighting',
    story: 'Suresh combines traditional techniques with modern lighting needs, creating functional art for contemporary homes.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
  },
  {
    name: 'Lakshmi Menon',
    experience: '12 years',
    specialty: 'Jewelry & Accessories',
    story: 'A young artisan who brings fresh perspectives to traditional craft, specializing in smaller decorative items.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop'
  },
  {
    name: 'Master Craftsman Krishnan',
    experience: '30+ years',
    specialty: 'Tool Making & Training',
    story: 'The village elder who trains new artisans and creates the tools used in coconut shell crafting.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
  }
];

const Artisans = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Artisan Community</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Meet the skilled craftspeople who keep the ancient tradition of coconut shell art alive. 
          Each artisan brings unique expertise and passion to their craft, supported by the JSW Foundation 
          in their mission to preserve cultural heritage while building sustainable livelihoods.
        </p>
      </div>

      {/* Community Impact */}
      <div className="bg-muted/30 rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Active Artisans</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">Villages Reached</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Families Supported</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5000+</div>
            <div className="text-sm text-muted-foreground">Products Created</div>
          </div>
        </div>
      </div>

      {/* Artisan Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {artisans.map((artisan, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img 
                src={artisan.image} 
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">{artisan.name}</h3>
              <div className="text-sm text-muted-foreground mb-2">
                Experience: {artisan.experience}
              </div>
              <div className="text-sm font-medium text-accent-foreground mb-3">
                Specialty: {artisan.specialty}
              </div>
              <p className="text-sm text-muted-foreground">
                {artisan.story}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* JSW Foundation Partnership */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Empowering Communities</h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
          Through our partnership with JSW Foundation, we provide training, tools, and market access 
          to rural artisans. This initiative not only preserves traditional crafts but also creates 
          sustainable income opportunities for entire villages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Skills Training</h3>
            <p className="text-sm opacity-90">
              Comprehensive training programs for new artisans in traditional techniques
            </p>
          </div>
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Tool & Equipment</h3>
            <p className="text-sm opacity-90">
              Providing quality tools and workspace setup for efficient production
            </p>
          </div>
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Market Access</h3>
            <p className="text-sm opacity-90">
              Direct market access through our platform, ensuring fair compensation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisans;
