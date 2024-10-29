import React from 'react';
import { useTranslation } from 'react-i18next';

import map from 'src/assets/images/Uzbekistan.svg';

export const Map: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container relative mb-10" data-aos="zoom-in">
      <img className="max-w-full" src={map} alt="Uzbekistan" />
      <div className="static text-center lg:absolute lg:text-left bottom-44 left-6 text-primary">
        <h3 className="text-xl font-bold md:text-2xl">{t('mapTitle')}</h3>
        <p className="text-base md:text-lg">{t('mapDesc')}</p>
      </div>
    </div>
  );
};
