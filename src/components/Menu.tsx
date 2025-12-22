import { Button } from './ui/button';
import burgerImg from '@/assets/burger.jpg';
import wrapImg from '@/assets/wrap.jpg';
import friesImg from '@/assets/fries.jpg';

const menuItems = [
  {
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
    price: 'Rs. 450',
    image: burgerImg,
    badge: 'Popular',
  },
  {
    name: 'Chicken Wrap',
    description: 'Grilled chicken with crispy vegetables wrapped in soft tortilla',
    price: 'Rs. 380',
    image: wrapImg,
    badge: 'New',
  },
  {
    name: 'Crispy Fries',
    description: 'Golden, crispy fries seasoned to perfection',
    price: 'Rs. 180',
    image: friesImg,
    badge: 'Best Seller',
  },
];

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

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  {item.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {item.name}
                  </h3>
                  <span className="font-heading text-xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
