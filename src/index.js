import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App';
import { AllProvider } from './Context/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllProvider>
    <App />
  </AllProvider>
);

/* 
npm i sass
npm install react-icons --save
npm i swiper

$ npm i emailjs-com --save
npm install @emailjs/browser --save
npm i react-tsparticles
*/

/*
https://swiperjs.com/ 
https://react-icons.github.io/
https://www.emailjs.com/

https://dashboard.emailjs.com/admin/templates/isieix5
*/