import { Button } from './ui/button';
import CountdownTimer from './CountdownTimer';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float hidden md:block" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float hidden md:block" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-28 text-center">
        <div className="animate-slide-down">
          <span className="inline-block px-5 py-2 mb-4 rounded-full bg-secondary/90 text-secondary-foreground font-body text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-yellow">
            Grand Opening
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lalas-white mb-4 animate-slide-up leading-tight">
          Coming Soon to
          <span className="block text-secondary mt-1">Your Neighborhood</span>
        </h1>

        <p className="font-body text-sm sm:text-base md:text-lg text-lalas-white/90 max-w-xl mx-auto mb-6 animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
          Where taste meets togetherness. Fresh burgers, crispy fries, soulful Qawwali nights, and warm vibes.
        </p>

        {/* Countdown Timer */}
        <div className="mb-6 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <p className="font-body text-lalas-white/70 text-xs sm:text-sm mb-3 uppercase tracking-widest">
            Opening January 15, 2026
          </p>
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in px-4" style={{ animationDelay: '0.7s' }}>
          <Button variant="hero" size="lg">
            Get Notified
          </Button>
          <Button variant="outline" size="lg" className="border-lalas-white text-lalas-white hover:bg-lalas-white hover:text-foreground">
            Explore Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-5 h-8 rounded-full border-2 border-lalas-white/50 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-lalas-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
