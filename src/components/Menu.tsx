
const Menu = () => {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/20 text-secondary-foreground font-body text-sm font-semibold">
            Our Menu
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Taste the <span className="text-primary">Delicious</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            From juicy burgers to crispy fries, every dish is crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="max-w-2xl mx-auto rounded-3xl border border-dashed border-muted-foreground/30 bg-card/40 p-10 text-center shadow-card">
          <p className="font-heading text-2xl md:text-3xl text-foreground mb-4">Menu coming soon</p>
          <p className="font-body text-muted-foreground text-lg">
            We&apos;re perfecting every recipe to match the ambiance. Check back shortly for our curated selection of dishes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
