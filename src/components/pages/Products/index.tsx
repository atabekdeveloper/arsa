import React from 'react';
import { useTranslation } from 'react-i18next';

import p1 from 'src/assets/products/1.png';
import p2 from 'src/assets/products/2.png';
import p3 from 'src/assets/products/3.png';
import p4 from 'src/assets/products/4.png';

export const Products: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="products">
      <h2 className="title">{t('navProducts')}</h2>
      <div className="container py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            data-aos="fade-right"
          >
            <img src={p1} alt={t('productTitle1')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-primary to-transparent hover:opacity-100">
              <div className="absolute bottom-0 p-6">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle1')}</h3>
                <p className="text-sm text-white">{t('productDesc1')}</p>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            data-aos="fade-left"
          >
            <img src={p2} alt={t('productTitle2')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-primary to-transparent hover:opacity-100">
              <div className="absolute bottom-0 p-6">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle2')}</h3>
                <p className="text-sm text-white">{t('productDesc2')}</p>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            data-aos="fade-right"
            data-aos-delay="90"
          >
            <img src={p3} alt={t('productTitle3')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-primary to-transparent hover:opacity-100">
              <div className="absolute bottom-0 p-6">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle3')}</h3>
                <p className="text-sm text-white">{t('productDesc3')}</p>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            data-aos="fade-left"
            data-aos-delay="90"
          >
            <img src={p4} alt={t('productTitle4')} className="object-cover w-full h-64" />

            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-primary to-transparent hover:opacity-100">
              <div className="absolute bottom-0 p-6">
                <h3 className="mb-2 text-lg font-bold text-white">{t('productTitle4')}</h3>
                <p className="text-sm text-white">{t('productDesc4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
