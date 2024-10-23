import React from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import p1 from 'src/assets/images/products/1.png';
import p2 from 'src/assets/images/products/2.png';
import p3 from 'src/assets/images/products/3.png';
import p4 from 'src/assets/images/products/4.jpg';

import './style.css';

export const Products: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="products" className="container">
      <h2 className="title">{t('navProducts')}</h2>
      <div className="py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Карточка продукта 1 */}
          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md about-relative hover:shadow-xl"
            data-aos="fade-right"
          >
            <LazyLoadImage src={p1} alt={t('productTitle1')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 flex items-end transition-opacity duration-300 bg-gradient-to-t from-primary to-transparent">
              <div className="p-6 transition-transform transform translate-y-0">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle1')}</h3>
                <p className="text-sm text-white about-description">{t('productDesc1')}</p>
              </div>
            </div>
          </div>

          {/* Карточка продукта 2 */}
          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md about-relative hover:shadow-xl"
            data-aos="fade-left"
          >
            <LazyLoadImage src={p2} alt={t('productTitle2')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 flex items-end transition-opacity duration-300 bg-gradient-to-t from-primary to-transparent">
              <div className="p-6 transition-transform transform translate-y-0">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle2')}</h3>
                <p className="text-sm text-white about-description">{t('productDesc2')}</p>
              </div>
            </div>
          </div>

          {/* Карточка продукта 3 */}
          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md about-relative hover:shadow-xl"
            data-aos="fade-right"
            data-aos-delay="90"
          >
            <LazyLoadImage src={p3} alt={t('productTitle3')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 flex items-end transition-opacity duration-300 bg-gradient-to-t from-primary to-transparent">
              <div className="p-6 transition-transform transform translate-y-0">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle3')}</h3>
                <p className="text-sm text-white about-description">{t('productDesc3')}</p>
              </div>
            </div>
          </div>

          {/* Карточка продукта 4 */}
          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md about-relative hover:shadow-xl"
            data-aos="fade-left"
            data-aos-delay="90"
          >
            <LazyLoadImage src={p4} alt={t('productTitle4')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 flex items-end transition-opacity duration-300 bg-gradient-to-t from-primary to-transparent">
              <div className="p-6 transition-transform transform translate-y-0">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle4')}</h3>
                <p className="text-sm text-white about-description">{t('productDesc4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
