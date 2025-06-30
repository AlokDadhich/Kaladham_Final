
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  artisan?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Coconut Shell Bowl Medium',
    price: 1299,
    image: '/lovable-uploads/56f0da78-8980-45a3-acea-5fc2fbd2115a.png',
    category: 'Decorative Collection',
    description: 'Handcrafted coconut shell bowl, perfect for serving snacks or as a decorative piece.',
    features: ['Natural coconut shell', 'Food-safe finish', 'Eco-friendly', 'Handmade'],
    artisan: 'Priya Nair'
  },
  {
    id: '2',
    name: 'Tea Spoon',
    price: 299,
    image: '/lovable-uploads/d8fb40cc-b869-4a0c-b1d3-34b9437af59c.png',
    category: 'Functional Art',
    description: 'Beautiful tea spoon made from coconut shell, natural and durable.',
    features: ['Lightweight', 'Natural texture', 'Heat resistant', 'Handmade'],
    artisan: 'Ravi Kumar'
  },
  {
    id: '3',
    name: 'Tea Light Candle Holder',
    price: 899,
    image: '/lovable-uploads/7712b71a-282d-496c-85db-e28dd9a0d428.png',
    category: 'Decorative Collection',
    description: 'Beautiful flower-shaped candle stand for warm lighting in your home.',
    features: ['Artistic design', 'Hand-carved patterns', 'Warm lighting', 'Eco-friendly'],
    artisan: 'Meera Devi'
  },
  {
    id: '4',
    name: 'Incense Stick Stand',
    price: 799,
    image: '/lovable-uploads/20426697-b36d-4ef1-80a3-a0c426072ee7.png',
    category: 'Functional Art',
    description: 'Traditional incense stand, ideal for prayer and meditation.',
    features: ['Stable base', 'Ash collector', 'Natural finish', 'Durable'],
    artisan: 'Suresh Pillai'
  },
  {
    id: '5',
    name: 'Pen Stand A',
    price: 699,
    image: '/lovable-uploads/20392ea2-ec5e-40bb-af17-84e5f8d5c97d.png',
    category: 'Functional Art',
    description: 'Beautiful pen stand for office and home, with space for multiple pens.',
    features: ['Multi-slot design', 'Stable base', 'Compact size', 'Handmade'],
    artisan: 'Lakshmi Menon'
  },
  {
    id: '6',
    name: 'Pen Stand B',
    price: 749,
    image: '/lovable-uploads/6bd1a357-c4df-4d57-b032-99f6d4aadb07.png',
    category: 'Functional Art',
    description: 'Pen stand with premium finish, more storage capacity.',
    features: ['Glossy finish', 'Large capacity', 'Ergonomic design', 'Strong construction'],
    artisan: 'Anil Sharma'
  },
  {
    id: '7',
    name: '3 Bowl Panchpatra A',
    price: 1899,
    image: '/lovable-uploads/35f30c38-fba3-48aa-862f-1d1db4bf57af.png',
    category: 'Decorative Collection',
    description: 'Traditional Panchpatra set for prayer and special occasions.',
    features: ['3 bowl set', 'Beautiful handle', 'Gold detailing', 'Traditional design'],
    artisan: 'Geeta Patel'
  },
  {
    id: '8',
    name: '3 Bowl Panchpatra B',
    price: 1599,
    image: '/lovable-uploads/1a5e0f14-05ba-4681-b6d9-e99c30c6fe24.png',
    category: 'Decorative Collection',
    description: 'Simple design Panchpatra set, ideal for daily use.',
    features: ['Three bowls', 'Easy cleaning', 'Lightweight', 'Practical design'],
    artisan: 'Rajesh Kumar'
  },
  {
    id: '9',
    name: 'Small Vase',
    price: 1199,
    image: '/lovable-uploads/e4abc2ac-8198-490e-b52e-c058f30df934.png',
    category: 'Wall Art and Frames',
    description: 'Beautiful handmade vase for home decoration.',
    features: ['Artistic shape', 'Golden detailing', 'Medium size', 'Hand-carved'],
    artisan: 'Sunita Devi'
  },
  {
    id: '10',
    name: 'Medium Vase',
    price: 1799,
    image: '/lovable-uploads/4acbc94c-bcf7-4532-a620-6f232915a26e.png',
    category: 'Wall Art and Frames',
    description: 'Large decorative vase with intricate patterns.',
    features: ['Large size', 'Complex carving', 'White patterns', 'Premium finish'],
    artisan: 'Vijay Kumar'
  },
  {
    id: '11',
    name: 'Decorative Vase Big',
    price: 2299,
    image: '/lovable-uploads/26cbb53a-09b2-4595-8d00-9b3afb1653d7.png',
    category: 'Decorative Collection',
    description: 'Large coconut shell vase with golden rim detailing, perfect for home decoration.',
    features: ['Premium size', 'Golden rim finish', 'Polished surface', 'Elegant design'],
    artisan: 'Kavitha Nair'
  },
  {
    id: '12',
    name: 'Tortoise Decorative',
    price: 1899,
    image: '/lovable-uploads/f0cc483d-79d8-461a-b637-212f050e9726.png',
    category: 'Decorative Collection',
    description: 'Beautiful tortoise shaped coconut shell craft with golden patterns.',
    features: ['Unique tortoise design', 'Golden geometric patterns', 'Symbolic decoration', 'Artistic craft'],
    artisan: 'Mohan Das'
  },
  {
    id: '13',
    name: 'Ganesh Coconut Temple',
    price: 2599,
    image: '/lovable-uploads/ca2ce2bc-59d2-4992-b031-e36b82f0c13e.png',
    category: 'Religious Collection',
    description: 'Sacred Ganesh temple made from whole coconut with deity inside.',
    features: ['Whole coconut design', 'Ganesh deity included', 'Natural coconut fiber', 'Religious significance'],
    artisan: 'Ramesha Acharya'
  },
  {
    id: '14',
    name: 'Small Ganesh Temple',
    price: 1999,
    image: '/lovable-uploads/a897062c-1f5c-406a-a5fd-9b43fef0d7fb.png',
    category: 'Religious Collection',
    description: 'Compact Ganesh temple with beautiful detailing and golden accents.',
    features: ['Compact design', 'Golden detailing', 'Colorful deity', 'Wooden base'],
    artisan: 'Sita Ram'
  },
  {
    id: '15',
    name: 'Medium Ganesh Temple',
    price: 2799,
    image: '/lovable-uploads/3376e754-7d2e-460f-9111-16b67bc6df86.png',
    category: 'Religious Collection',
    description: 'Medium sized Ganesh temple with premium finish and beautiful deity.',
    features: ['Medium size', 'Premium finish', 'Detailed deity', 'Stable wooden base'],
    artisan: 'Krishna Murthy'
  },
  {
    id: '16',
    name: 'God Flower Seat',
    price: 1699,
    image: '/lovable-uploads/fd242edd-bb59-4f1d-9f33-5a6a2d6963ff.png',
    category: 'Religious Collection',
    description: 'Elegant flower seat for deity with coconut shell umbrella design.',
    features: ['Flower seat design', 'Coconut umbrella', 'Artistic carving', 'Religious utility'],
    artisan: 'Padma Lakshmi'
  },
  {
    id: '17',
    name: 'Shivlinga',
    price: 1799,
    image: '/lovable-uploads/2ecea8a4-3140-4cfa-8826-cca18de0beef.png',
    category: 'Religious Collection',
    description: 'Sacred Shivlinga made from coconut shell with traditional patterns.',
    features: ['Traditional design', 'Sacred geometry', 'Golden accents', 'Religious significance'],
    artisan: 'Shankar Bhat'
  },
  {
    id: '18',
    name: 'Ganesh Lotus Small',
    price: 1599,
    image: '/lovable-uploads/820c9e52-e82a-43de-9278-a3aebb6bacc4.png',
    category: 'Religious Collection',
    description: 'Beautiful Ganesh deity seated on lotus petals made from coconut shell.',
    features: ['Lotus petal design', 'Colorful Ganesh', 'Golden finish', 'Artistic presentation'],
    artisan: 'Devi Prasad'
  },
  {
    id: '19',
    name: 'Wine Glass A',
    price: 899,
    image: '/lovable-uploads/54a25a0d-337b-4b00-953f-a112121ad837.png',
    category: 'Functional Art',
    description: 'Elegant wine glass made from coconut shell with wooden stem.',
    features: ['Wine glass design', 'Wooden stem', 'Natural finish', 'Unique craft'],
    artisan: 'Joseph Thomas'
  },
  {
    id: '20',
    name: 'Decorative Ship',
    price: 2199,
    image: '/lovable-uploads/60c0f69c-e581-4893-845f-05d4ce8181cd.png',
    category: 'Decorative Collection',
    description: 'Beautiful sailing ship model made from coconut shell with detailed craftsmanship.',
    features: ['Ship model design', 'Sailing details', 'Artistic craft', 'Home decoration'],
    artisan: 'Captain Ravi'
  }
];

export const categories = [
  'All',
  'Decorative Collection',
  'Functional Art',
  'Wall Art and Frames',
  'Religious Collection'
];
