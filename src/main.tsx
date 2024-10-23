import { createRoot } from 'react-dom/client';

import AOS from 'aos';

import { App } from './App';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'aos/dist/aos.css';

import 'src/assets/styles/swiper.css';
import './index.css';

import './i18next';

AOS.init({ delay: 75, once: true, easing: 'linear' });

createRoot(document.getElementById('root')!).render(<App />);
