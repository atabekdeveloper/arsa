import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import b1 from 'src/assets/images/banner/1.webp';
import b2 from 'src/assets/images/banner/2.webp';
import b3 from 'src/assets/images/banner/3.webp';
import b4 from 'src/assets/images/banner/4.webp';
import b5 from 'src/assets/images/banner/5.webp';

const banners = [
  { src: b5, title: 'Welcome to Banner 1' },
  { src: b2, title: 'Discover Banner 2' },
  { src: b3, title: 'Explore Banner 3' },
  { src: b4, title: 'Learn with Banner 4' },
];

export const Home: React.FC = () => {
  return (
    <section id="#">
      <Swiper
        className="mySwiper"
        rewind
        effect={'fade'}
        modules={[Autoplay, EffectFade]}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              className="object-cover h-screen max-w-full brightness-50"
              src={banner.src}
              alt={banner.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
