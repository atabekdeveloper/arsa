import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import b1 from 'src/assets/banner/1.webp';
import b2 from 'src/assets/banner/2.webp';
import b3 from 'src/assets/banner/3.webp';
import b4 from 'src/assets/banner/4.webp';

const banners = [
  { src: b1, title: 'Welcome to Banner 1' },
  { src: b2, title: 'Discover Banner 2' },
  { src: b3, title: 'Explore Banner 3' },
  { src: b4, title: 'Learn with Banner 4' },
];

export const Banner: React.FC = () => {
  return (
    <div className="mx-0 md:-mx-12" data-aos="zoom-in">
      <Swiper
        rewind
        effect={'fade'}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="rounded-md mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                className="max-w-full md:h-[500px] h-64 object-cover opacity-90 filter brightness-50"
                src={banner.src}
                alt={banner.title}
              />
              <div className="absolute bottom-0 left-0 z-10 w-full p-6 text-white rounded-md bg-gradient-to-t from-black to-transparent">
                <h2 className="text-2xl font-bold">{banner.title}</h2>
                <p className="max-w-[700px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsa non quo natus
                  tenetur qui magni iusto adipisci neque. Possimus illum rem velit, nisi aut
                  adipisci quae maxime quam placeat!
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
