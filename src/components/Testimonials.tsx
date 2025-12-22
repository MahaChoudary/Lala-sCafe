import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Food Blogger',
    content: 'The best burgers in town! LaLa\'s Café has become my go-to place for authentic fast food with amazing ambience.',
    rating: 5,
  },
  {
    name: 'Fatima Ali',
    role: 'Regular Customer',
    content: 'Qawwali nights are magical! Great food, soulful music, and wonderful people. It truly feels like home.',
    rating: 5,
  },
  {
    name: 'Usman Malik',
    role: 'Local Resident',
    content: 'Finally, a family-friendly café in our neighborhood. The kids love the fries and I love the cozy atmosphere.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why People <span className="text-primary">Love Us</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear what our beloved customers have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-heading text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-foreground font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
