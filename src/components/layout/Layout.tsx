import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

import {
  Home,
  About,
  Products,
  Partners,
  Services,
  Advantages,
  Experience,
} from 'src/components/blocks';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      <Header />
      <main className="flex-auto">
        <Home />
        <About />
        <Experience />
        <Advantages />
        <Services />
        <Products />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};
