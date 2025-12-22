import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Food Street', 'City Center, Pakistan'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+92 300 1234567', '+92 42 1234567'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon - Thu: 11AM - 11PM', 'Fri - Sun: 11AM - 12AM'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@lalascafe.pk', 'events@lalascafe.pk'],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold">
              Contact Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Visit <span className="text-primary">LaLa's Café</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              We'd love to see you! Drop by for a meal, call us for reservations, 
              or send us a message. We're always here to welcome you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-card shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="font-body text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-card">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-sm text-foreground font-medium mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground font-medium mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm text-foreground font-medium mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="font-body text-sm text-foreground font-medium mb-2 block">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              <Button variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
