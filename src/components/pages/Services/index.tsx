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
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center w-36 h-36 p-4 rounded-full bg-gradient-to-r from-primary to-[#EF4136]">
              <div className="p-4 bg-white rounded-full">
                <img src={delivery} alt="Delivery" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle1')}</h3>
              <p>{t('serviceDesc1')}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center w-36 h-36 p-4 rounded-full bg-gradient-to-r from-primary to-[#EF4136]">
              <div className="p-4 bg-white rounded-full">
                <img src={merchant} alt="Merchant" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle2')}</h3>
              <p>{t('serviceDesc2')}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center w-36 h-36 p-4 rounded-full bg-gradient-to-r from-primary to-[#EF4136]">
              <div className="p-4 bg-white rounded-full">
                <img src={tshirt} alt="Tshirt" />
              </div>
            </div>
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
