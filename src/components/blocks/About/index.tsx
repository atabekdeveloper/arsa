import React from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import about1 from 'src/assets/images/about/about1.jpg';
import about2 from 'src/assets/images/about/about2.jpg';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="container">
      <h2 className="title">{t('navAbout')}</h2>
      <div className="flex flex-col items-center justify-between gap-8 pt-4 lg:flex-row lg:gap-12">
        <div data-aos="zoom-in">
          <div className="relative lg:w-2/4">
            <LazyLoadImage className="about-img about-img-overlay" src={about2} alt="About 2" />
            <LazyLoadImage className="about-img" src={about1} alt="About 1" />
          </div>
        </div>

        <div className="relative lg:w-[55%] lg:mt-0 mt-5" data-aos="zoom-in">
          <div className="p-6 text-base leading-relaxed text-center text-gray-600 border rounded-md md:text-lg simple-border-animation md:text-left">
            <p>{t('aboutInfo')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
