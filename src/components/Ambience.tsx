import { Wifi, Coffee, Users, Smile } from 'lucide-react';
import ambienceImg from '@/assets/ambience.jpg';

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Coffee, label: 'Premium Coffee' },
  { icon: Users, label: 'Group Seating' },
  { icon: Smile, label: 'Family Friendly' },
];

const Ambience = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold">
              Our Space
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Cozy Corner for{' '}
              <span className="text-primary">Everyone</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Step into LaLa's Café and feel the warmth. Our carefully designed space 
              combines modern comfort with traditional charm, creating the perfect 
              backdrop for great conversations, family gatherings, or a quiet moment 
              with your favorite meal.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex flex-col items-center p-4 rounded-xl bg-card shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <amenity.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="font-body text-sm text-foreground text-center">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/20 bg-card/40 px-6 py-5 font-heading text-sm uppercase tracking-[0.35em] text-muted-foreground w-max">
          
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-90" />
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={ambienceImg}
                alt="LaLa's Café Ambience"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lalas-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambience;
