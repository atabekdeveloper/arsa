import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { PiTelegramLogo } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';
import { IoMdTime } from 'react-icons/io';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="pb-4 text-white bg-primary">
      <div className="container">
        <div className="pb-12 mx-auto">
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
                  <IoMdTime size={30} />
                  <div>
                    <p className="text-base font-bold">{t('time')}</p>
                    <p>{t('workTime')}, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <HiOutlineLocationMarker size={30} />
                  <div>
                    <p className="text-base font-bold">{t('country')}</p>
                    <p>{t('city')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FiPhone size={30} />
                  <div className="flex flex-col">
                    <a href="tel:+998901501350">+998 90 150 13 50</a>
                    <a href="tel:+998911500040">+998 91 150 00 40</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <IoMailOutline size={30} />
                  <a href="mailto:akmalxon91@mail.ru">akmalxon91@mail.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap-reverse justify-center gap-5 pt-4 text-white border-t md:justify-between">
          <p className="flex flex-wrap justify-center gap-2">
            <span>Copyright ©2022; Designed by</span>
            <a href="https://musait.tech/" target="_blank" className="font-bold text-white">
              Musait Technologies
            </a>
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              <a
                className="p-1 bg-white rounded-full"
                href="https://t.me/ARSAkokand"
                target="_blank"
              >
                <PiTelegramLogo size={24} color="#1b75bc" />
              </a>
              <a
                className="p-1 bg-white rounded-full"
                href="https://www.instagram.com/arsakokand/"
                target="_blank"
              >
                <FaInstagram size={24} color="#1b75bc" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
