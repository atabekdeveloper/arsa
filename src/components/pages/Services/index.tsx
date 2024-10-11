import React from 'react';

import tshirt from 'src/assets/services/tshirt.png';
import merchant from 'src/assets/services/merchant.png';
import delivery from 'src/assets/services/delivery.png';
import { useTranslation } from 'react-i18next';

export const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="services">
      <h2 className="title">{t('navServices')}</h2>
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4" data-aos="fade-right">
            <img className="max-w-36" src={delivery} alt="Delivery" />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle1')}</h3>
              <p>{t('serviceDesc1')}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4" data-aos="fade-up">
            <img className="max-w-36" src={merchant} alt="Merchant" />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle2')}</h3>
              <p>{t('serviceDesc2')}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4" data-aos="fade-left">
            <img className="max-w-36" src={tshirt} alt="Tshirt" />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle3')}</h3>
              <p>{t('serviceDesc3')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
