import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import b4 from 'src/assets/images/banner/4.webp';
import b5 from 'src/assets/images/banner/5.webp';
import b6 from 'src/assets/images/banner/6.webp';
import b7 from 'src/assets/images/banner/7.webp';
import b8 from 'src/assets/images/banner/8.webp';

import './style.css';

const banners = [b4, b5, b6, b7, b8];

export const Banner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="#" className="relative">
      <Swiper
        className="mySwiper"
        rewind
        effect={'fade'}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <img
                className="object-cover w-full h-screen brightness-50"
                src={banner}
                alt={`Slide ${index}`}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white"
                data-aos="zoom-in"
              >
                <div className="p-10 rounded-lg shadow-lg bg-white/10 backdrop-blur-lg">
                  <h2 className="mb-4 text-2xl font-bold md:text-4xl">ARSAKOKAND</h2>
                  <p className="max-w-2xl text-base md:text-xl">{t('aboutInfoMini')}</p>
                </div>
              </div>
              {/* Animated Down Arrow */}
              <div className="absolute p-2 transform -translate-x-1/2 rounded-full shadow-lg bottom-5 left-1/2 bg-white/10 backdrop-blur-lg bounce-animation">
                <a href="#about" className="text-3xl text-white">
                  <MdKeyboardArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
