import { Calendar, Users, Gift, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const events = [
  {
    icon: Users,
    title: 'Family Sundays',
    description: 'Bring your loved ones for special family deals and kid-friendly activities.',
    date: 'Every Sunday',
    color: 'bg-primary',
  },
  {
    icon: Gift,
    title: 'Birthday Celebrations',
    description: 'Make your special day memorable with our customized birthday packages.',
    date: 'Book Anytime',
    color: 'bg-secondary',
  },
  {
    icon: Sparkles,
    title: 'Theme Nights',
    description: 'Experience unique themed evenings with special menus and décor.',
    date: 'Monthly',
    color: 'bg-accent',
  },
  {
    icon: Calendar,
    title: 'Corporate Events',
    description: 'Host your team meetings and office parties in our private space.',
    date: 'By Reservation',
    color: 'bg-primary',
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent font-body text-sm font-semibold">
            Fun & Events
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Monthly <span className="text-primary">Fun Events</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            There's always something exciting happening at LaLa's Café. Join us for memorable experiences.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative p-8 rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Decoration */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${event.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${event.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <event.icon className="w-7 h-7 text-lalas-white" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {event.date}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
