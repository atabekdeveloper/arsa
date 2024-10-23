import React from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import advantages from 'src/assets/images/advantages/advantages.png';
import icon1 from 'src/assets/images/advantages/icon1.png';
import icon2 from 'src/assets/images/advantages/icon2.png';
import icon3 from 'src/assets/images/advantages/icon3.png';
import icon4 from 'src/assets/images/advantages/icon4.png';
import icon5 from 'src/assets/images/advantages/icon5.png';
import icon6 from 'src/assets/images/advantages/icon6.png';

export const Advantages: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    {
      title: t('advantageTitle1'),
      description: t('advantageDesc1'),
      icon: icon1,
    },
    {
      title: t('advantageTitle2'),
      description: t('advantageDesc2'),
      icon: icon2,
    },
    {
      title: t('advantageTitle3'),
      description: t('advantageDesc3'),
      icon: icon3,
    },
    {
      title: t('advantageTitle4'),
      description: t('advantageDesc4'),
      icon: icon4,
    },
    {
      title: t('advantageTitle5'),
      description: t('advantageDesc5'),
      icon: icon5,
    },
    {
      title: t('advantageTitle6'),
      description: t('advantageDesc6'),
      icon: icon6,
    },
  ];
  return (
    <section className="container" id="advantages">
      <h2 className="title">{t('advantages')}</h2>
      <div className="max-w-full py-8 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
          {/* Левый блок с преимуществами */}
          <div className="flex flex-col space-y-4 md:order-1" data-aos="fade-right">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="p-6 text-center bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <LazyLoadImage className="max-w-20" src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 line-clamp-3">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Центрированный блок с изображением (перемещается вниз на мобильных) */}
          <div
            className="flex justify-center h-[400px] md:h-[700px] order-last md:order-2"
            data-aos="zoom-in"
          >
            <LazyLoadImage
              className="object-cover w-full rounded-lg shadow-md"
              src={advantages}
              alt="Advantages"
            />
          </div>

          {/* Правый блок с преимуществами */}
          <div className="flex flex-col space-y-4 md:order-3" data-aos="fade-left">
            {features.slice(3).map((feature, index) => (
              <div key={index} className="p-6 text-center bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <LazyLoadImage className="max-w-20" src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 line-clamp-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
