import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import {
  Banner,
  About,
  Products,
  Partners,
  Services,
  Advantages,
  Experience,
} from 'src/components/blocks';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Layout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-auto">
        <Banner />
        <About />
        <Experience />
        <Advantages />
        <Services />
        <Products />
        <Partners />
        {/* Scroll to top button */}
        <div
          className={`fixed z-10 p-2 transform translate-x-1 border border-white rounded-full bottom-5 right-5 bg-primary bounce-animation opacity-0 transition delay-100 ${
            scrolled && 'opacity-100'
          }`}
        >
          {/* Set href to "#" to scroll to the top */}
          <a href="#" className="text-3xl text-white">
            <MdKeyboardArrowUp />
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
