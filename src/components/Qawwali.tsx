import { Music, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';
import qawwaliImg from '@/assets/qawwali.jpg';

const Qawwali = () => {
  return (
    <section
      id="qawwali"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${qawwaliImg})` }}
      />
      <div className="absolute inset-0 bg-lalas-black/80" />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/90 text-secondary-foreground">
            <Music className="w-5 h-5" />
            <span className="font-body text-sm font-semibold">Live Entertainment</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-lalas-white mb-6">
            Experience Soulful{' '}
            <span className="text-secondary">Qawwali Nights</span>
          </h2>

          <p className="font-body text-lalas-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Every weekend, immerse yourself in the enchanting world of Qawwali. 
            Let the mesmerizing melodies and powerful vocals touch your soul while 
            you enjoy our delicious offerings. A unique dining experience that feeds 
            both body and spirit.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-lalas-white/10 backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-secondary" />
              <span className="font-body text-lalas-white">Every Friday & Saturday</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-lalas-white/10 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="font-body text-lalas-white">8:00 PM - 11:00 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Reserve Your Spot
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-lalas-white text-lalas-white hover:bg-lalas-white hover:text-lalas-black"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qawwali;
