
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or artisan program? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" className="w-full h-11 text-base">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">Visit Our Workshop</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Village Craft Center<br />
                    Kumbakonam District<br />
                    Kerala, India - 680001
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">Contact Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Email: info@kaladham.com<br />
                    Phone: +91 9876 543 210<br />
                    Workshop Hours: 9:00 AM - 6:00 PM (Mon-Sat)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">For Wholesale Inquiries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Email: wholesale@kaladham.com<br />
                    Minimum order quantities apply
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Artisan Training Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Interested in learning coconut shell crafting? Our JSW Foundation-supported 
                  training program welcomes new artisans from rural communities.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    3-month comprehensive training
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Tools and materials provided
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Market access upon completion
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Ongoing mentorship support
                  </p>
                </div>
                <Button variant="outline" className="w-full h-11">
                  Learn More About Training
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">JSW Foundation Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Kaladham is proudly supported by JSW Foundation as part of their commitment 
                  to preserving traditional crafts and empowering rural communities. This partnership 
                  enables us to provide comprehensive support to artisan families while scaling 
                  the reach of sustainable craft practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
