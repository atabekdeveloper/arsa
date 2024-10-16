import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Banner } from './Banner';

import { About, Products, Partners, Services, Advantages, Experience } from 'src/components/pages';

export const Layout: React.FC = () => {
  return (
    <div className="max-w-full min-h-screen overflow-hidden">
      <Header />
      <main className="max-w-[1220px] m-auto px-5 mt-5">
        <Banner />
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
