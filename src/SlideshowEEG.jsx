import { useState } from "react";

import eeg0Img from './assets/eeg0.jpg'
import eeg1Img from './assets/eeg1.PNG'
import eeg2Img from './assets/eeg2.PNG'
import eeg3Img from './assets/eeg3.PNG'

function SlideshowEEG() {
  const images = [
    eeg0Img,
    eeg1Img,
    eeg2Img,
    eeg3Img
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

export default SlideshowEEG;