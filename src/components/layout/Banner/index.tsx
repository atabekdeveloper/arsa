import React from 'react';
import Slider, { Settings } from 'react-slick';

import b1 from 'src/assets/banner/1.webp';
import b2 from 'src/assets/banner/2.webp';
import b3 from 'src/assets/banner/3.webp';
import b4 from 'src/assets/banner/4.webp';

const banners = [
  { src: b1, alt: 'Banner 1', title: 'Welcome to Banner 1' },
  { src: b2, alt: 'Banner 2', title: 'Discover Banner 2' },
  { src: b3, alt: 'Banner 3', title: 'Explore Banner 3' },
  { src: b4, alt: 'Banner 4', title: 'Learn with Banner 4' },
];

export const Banner: React.FC = () => {
  const settings: Settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="relative mx-0 md:-mx-12" data-aos="zoom-in">
      <Slider {...settings} className="overflow-hidden rounded-xl">
        {banners.map((banner, index) => (
          <img
            key={index}
            className="max-w-full md:h-[500px] h-64 object-cover opacity-90 filter brightness-50"
            src={banner.src}
            alt={banner.alt}
          />
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-black to-transparent rounded-xl">
        <h2 className="text-3xl font-bold">Arsakokand</h2>
      </div>
    </div>
  );
};
