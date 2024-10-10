import instagram from 'src/assets/instagram.png';
import telegram from 'src/assets/telegram.png';

import logo from 'src/assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-white bg-primary">
      <div className="container flex items-center md:justify-between justify-center gap-5 max-w-[1220px] px-5 mb-5 flex-wrap border-white border-b pb-4 mx-auto">
        <a href="#">
          <img className="max-w-16" src={logo} alt="Logo" />
        </a>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2">
            <a href="https://t.me/ARSAkokand" target="_blank">
              <img className="max-w-7" src={telegram} alt="Telegram" />
            </a>
            <a href="https://www.instagram.com/arsakokand/" target="_blank">
              <img className="max-w-7" src={instagram} alt="Instagram" />
            </a>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-4">
            {navItems.map((nav, i) => (
              <a key={i} href={nav.link} className="text-base text-white hover:underline">
                {nav.title}
              </a>
            ))}
          </div> */}
        </div>
      </div>
      <div className="text-white ">
        <p className="flex flex-wrap justify-center gap-2">
          <span>Copyright ©2022; Designed by</span>
          <a href="https://musait.tech/" target="_blank" className="font-bold text-white">
            Musait Technologies
          </a>
        </p>
      </div>
    </footer>
  );
};
