import React from 'react';

import instagram from 'src/assets/contact/instagram.png';
import telegram from 'src/assets/contact/telegram.png';
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
              <a href="https://t.me/ARSAkokand" target="_blank">
                <img className="max-w-7" src={telegram} alt="Telegram" />
              </a>
              <a href="https://www.instagram.com/arsakokand/" target="_blank">
                <img className="max-w-7" src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
