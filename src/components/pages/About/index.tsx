import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from 'src/assets/logo.png';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="about">
      <h2 className="title">{t('navAbout')}</h2>
      <div className="container relative flex items-center justify-center py-2 mx-auto md:py-16">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 -z-10">
          <div className="flex items-center justify-center bg-gray-100 rounded-full w-80 h-80">
            <img className="max-w-48" src={logo} alt="Logo" />
          </div>
        </div>

        <div className="relative text-center">
          <p className="text-base text-gray-700 md:text-lg">{t('aboutInfo')}</p>
        </div>
      </div>
    </div>
  );
};
