import { Music2, Coffee, Sparkles, PartyPopper } from 'lucide-react';

const creativeMoments = [
  {
    title: 'Midnight Qawwali Nights',
    description: 'Live Qawwali performances fill the cafe with soul, rhythm, and warmth — paired with late-night bites and a glowing, cozy ambience.',
    tag: 'FRIDAYS • 10 PM',
    icon: Music2,
  },
  {
    title: 'Slow Brew Mornings',
    description: 'Freshly brewed coffee served slow and warm — perfect for calm mornings, conversations, and peaceful starts to the day.',
    tag: 'SUNRISE SESSIONS',
    icon: Coffee,
  },
  {
    title: 'Chef\'s Special Bites',
    description: 'Weekly chef-crafted fast-food specials — limited plates, bold flavors, and something new every time you visit.',
    tag: 'LIMITED RELEASE',
    icon: Sparkles,
  },
  {
    title: 'Neighborhood Hangout Table',
    description: 'A shared cafe space where friends gather, ideas flow, games happen, and LaLa\'s signature vibes come alive.',
    tag: 'ALL WEEK LONG',
    icon: PartyPopper,
  },
];

const studioNotes = [
  'Fresh fast-food specials crafted weekly',
  'Local ingredients sourced with care',
  'Music playlists and live vibes curated for cozy evenings',
  'New experiences announced every Sunday • 7 PM',
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Story Column */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/15 via-primary/5 to-background p-10 shadow-card">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-card/70 text-primary font-body text-sm font-semibold">
              Live Qawwali • Fresh Bites • Cozy Café Moments
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Moments we&apos;re creating together at LaLa&apos;s Café.
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Instead of testimonials, we celebrate what&apos;s happening right now inside LaLa&apos;s Café — flavors, music, and moments you can be part of this very week.
            </p>
            <div className="space-y-4">
              {studioNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="font-body text-sm text-foreground/90">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-white/20 bg-card/40 px-6 py-5 font-heading text-sm uppercase tracking-[0.35em] text-muted-foreground">
              New experiences announced every Sunday • 7 PM
            </div>
          </div>

          {/* Creative Moments Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {creativeMoments.map((moment, index) => (
              <div
                key={moment.title}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-heading uppercase tracking-[0.3em] text-muted-foreground">
                    {moment.tag}
                  </span>
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary">
                    <moment.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {moment.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {moment.description}
                </p>
                <div className="flex items-center justify-between text-xs font-heading uppercase tracking-[0.4em] text-secondary">
                  <span>RESERVE A SEAT</span>
                  <span>→</span>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambient ticker */}
        <div className="mt-16 rounded-full border border-border bg-card/60 px-8 py-4">
          <p className="font-heading text-sm uppercase tracking-[0.5em] text-muted-foreground text-center">
            Live Qawwali • Fresh Bites • Cozy Café Moments
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
