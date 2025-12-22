import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Story', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  menu: [
    { name: 'Burgers', href: '#menu' },
    { name: 'Wraps', href: '#menu' },
    { name: 'Fries & Sides', href: '#menu' },
    { name: 'Drinks', href: '#menu' },
  ],
  services: [
    { name: 'Dine-In', href: '#' },
    { name: 'Takeaway', href: '#' },
    { name: 'Catering', href: '#' },
    { name: 'Private Events', href: '#events' },
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#' },
    { name: 'Reservations', href: '#' },
    { name: 'Feedback', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="bg-lalas-black text-lalas-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="LaLa's Café" className="w-16 h-16 object-contain" />
              <span className="font-heading text-2xl font-bold">LaLa's Café</span>
            </div>
            <p className="font-body text-lalas-greyLight text-sm leading-relaxed mb-6 max-w-xs">
              Where taste meets togetherness. Experience fresh food, soulful music, 
              and warm vibes at LaLa's Café.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-lalas-greyLight">
                  123 Food Street, City Center
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-lalas-greyLight">
                  +92 300 1234567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-lalas-greyLight">
                  hello@lalascafe.pk
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-lalas-greyDark flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-lalas-greyLight hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-lalas-greyLight hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-lalas-greyLight hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-lalas-greyLight hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-lalas-greyDark">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-heading text-xl font-semibold mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="font-body text-sm text-lalas-greyLight">
                Get updates on new menu items, events, and exclusive offers.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 rounded-lg bg-lalas-greyDark text-lalas-white font-body placeholder:text-lalas-greyLight focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-lalas-greenDark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-lalas-greyDark">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-lalas-greyLight flex items-center gap-1">
              © 2025 LaLa's Café. Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Pakistan
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-sm text-lalas-greyLight hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-lalas-greyLight hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body text-sm text-lalas-greyLight hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
