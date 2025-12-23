import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Ambience from '@/components/Ambience';
import Qawwali from '@/components/Qawwali';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LaLa's Café | Coming Soon - Where Taste Meets Togetherness</title>
        <meta
          name="description"
          content="LaLa's Café - Fresh burgers, crispy fries, soulful Qawwali nights, and warm vibes. Opening January 15, 2025. Experience where taste meets togetherness."
        />
        <meta name="keywords" content="LaLa's Café, fast food, burgers, wraps, fries, Qawwali nights, café, restaurant, Pakistan" />
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Ambience />
          <Qawwali />
          <Events />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
};

export default Index;
