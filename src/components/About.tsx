import { UtensilsCrossed, Heart, Music, Users } from 'lucide-react';
import logo from '@/assets/logo.png';

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Fresh Fast Food',
    description: 'Handcrafted burgers, wraps, and crispy fries made with the finest ingredients.',
  },
  {
    icon: Heart,
    title: 'Cozy Ambience',
    description: 'A warm, welcoming space where families and friends come together.',
  },
  {
    icon: Music,
    title: 'Qawwali Nights',
    description: 'Experience soulful music that touches your heart while you dine.',
  },
  {
    icon: Users,
    title: 'Community Hub',
    description: 'More than a café — a place where memories are made.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image/Logo */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110" />
              <img
                src={logo}
                alt="LaLa's Café Logo"
                className="relative z-10 w-64 md:w-80 lg:w-96 h-auto animate-float"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Foodies Welcome Here at{' '}
              <span className="text-primary">LaLa's Café</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              LaLa's Café is more than just a fast food destination — it's where taste meets 
              togetherness. We bring you fresh, delicious food in a cozy atmosphere that feels 
              like home. From our signature burgers to soulful Qawwali nights, every visit is 
              an experience to remember.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-5 rounded-xl bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
