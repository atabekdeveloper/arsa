import React from 'react';
import { useTranslation } from 'react-i18next';

import p1 from 'src/assets/products/1.png';
import p2 from 'src/assets/products/2.png';
import p3 from 'src/assets/products/3.png';
import p4 from 'src/assets/products/4.png';

export const Products: React.FC = () => {
  const { t } = useTranslation();
  const products = [
    {
      title: t('productTitle1'),
      description: t('productDesc1'),
      imageUrl: p1,
    },
    {
      title: t('productTitle2'),
      description: t('productDesc2'),
      imageUrl: p2,
    },
    {
      title: t('productTitle3'),
      description: t('productDesc3'),
      imageUrl: p3,
    },
    {
      title: t('productTitle4'),
      description: t('productDesc4'),
      imageUrl: p4,
    },
  ];
  return (
    <div id="products">
      <h2 className="title">{t('navProducts')}</h2>
      <div className="container py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map(({ title, description, imageUrl }, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <img src={imageUrl} alt={title} className="object-cover w-full h-64" />

              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-primary to-transparent hover:opacity-100">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm text-white">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
