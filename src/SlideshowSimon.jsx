import { useState } from "react";
import './style/Slideshow.css'

import arduino0Img from './assets/arduino0.jpg'
import arduino1Img from './assets/arduino1.PNG'
import arduino2Img from './assets/arduino2.PNG'
import arduino3Img from './assets/arduino3.PNG'

function SlideshowSimon() {
  const images = [
    arduino0Img,
    arduino1Img,
    arduino2Img,
    arduino3Img
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <img src={images[current]} alt="slide" />

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default SlideshowSimon;