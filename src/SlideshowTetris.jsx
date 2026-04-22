import { useState } from "react";

import launchpad0Img from './assets/launchpad0.jpg'
import launchpad1Img from './assets/launchpad1.jpg'
import launchpad2Img from './assets/launchpad2.jpeg'
import launchpad3Img from './assets/launchpad3.jpeg'

function SlideshowTetris() {
  const images = [
    launchpad0Img,
    launchpad1Img,
    launchpad2Img,
    launchpad3Img
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

export default SlideshowTetris;