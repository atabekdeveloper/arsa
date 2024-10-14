import { createRoot } from 'react-dom/client';

import AOS from 'aos';

import { App } from './App';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';

import './index.css';

import './i18next';

AOS.init({ delay: 75, once: true, easing: 'linear' });

createRoot(document.getElementById('root')!).render(<App />);
