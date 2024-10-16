import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { PiTelegramLogo } from 'react-icons/pi';

import { Contact } from 'src/components/pages';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-4 text-white bg-primary">
      <div className="max-w-[1220px] m-auto px-5 mt-5">
        <Contact />
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
