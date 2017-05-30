import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import imageDataUrl from '../assets/img/img-data-url.jpg';
import image from '../assets/img/img.png';

ReactDOM.render(
  <div>
    <h1>Hello, <span className="icon-html-five"></span> world!</h1>
    <img src={imageDataUrl} />
    <img src={image} />
    <div className="bg"></div>
  </div>,
  document.getElementById('root')
);
