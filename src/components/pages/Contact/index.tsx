import React from 'react';
import { useTranslation } from 'react-i18next';

import clock from 'src/assets/contact/clock.png';
import telephone from 'src/assets/contact/telephone.png';
import mail from 'src/assets/contact/mail.png';
import location from 'src/assets/contact/location.png';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container pb-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-lg" data-aos="fade-right">
          <iframe
            title="Uzbekiston respublikasi Fargona viloyat Qoqon shahri manzil Baraka savdo majmuasi"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3030.680287330182!2d70.91562499999999!3d40.570737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM0JzE0LjciTiA3MMKwNTQnNTYuMyJF!5e0!3m2!1sru!2s!4v1728551156077!5m2!1sru!2s"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-white bg-primary" data-aos="fade-left">
          <h2 className="mb-6 text-2xl font-bold text-white">{t('navContact')}</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img className="max-w-6" src={clock} alt="Clock" />
              <div>
                <p className="text-base font-bold">{t('time')}</p>
                <p>Dushanba-Shanba, 9:00 - 18:00</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img className="max-w-6" src={location} alt="Location" />
              <div>
                <p className="text-base font-bold">{t('country')}</p>
                <p>{t('city')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img className="max-w-6" src={telephone} alt="Telephone" />
              <div className="flex flex-col">
                <a href="tel:+998901501350">+998 90 150 13 50</a>
                <a href="tel:+998911500040">+998 91 150 00 40</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img className="max-w-6" src={mail} alt="Mail" />
              <a href="mailto:akmalxon91@mail.ru">akmalxon91@mail.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
