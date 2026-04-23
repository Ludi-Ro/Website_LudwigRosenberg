import { useState } from "react";

import SlideshowTetris from "./SlideshowTetris.jsx";
import SlideshowSimon from "./SlideshowSimon.jsx";
import SlideshowEEG from "./SlideshowEEG.jsx";

import launchpad0Img from "./assets/launchpad0.jpg";
import launchpad1Img from "./assets/launchpad1.jpg";
import launchpad2Img from "./assets/launchpad2.jpeg";
import arduino0Img from "./assets/arduino0.jpg";
import arduino1Img from "./assets/arduino1.PNG";
import arduino2Img from "./assets/arduino2.PNG";
import eeg0Img from "./assets/eeg0.jpg";
import eeg1Img from "./assets/eeg1.PNG";
import eeg2Img from "./assets/eeg2.PNG";

function Coding() {
  const [activeSlideshow, setActiveSlideshow] = useState(null);

  const slideshows = {
    tetris: <SlideshowTetris />,
    simon: <SlideshowSimon />,
    eeg: <SlideshowEEG />,
  };

  return (
    <div className="coding-container">
      <h1>Coding</h1>
      <p className="intro">Throughout the years I made a lot of coding projects.
      On this page you can see <br />
      some of the projects using interesting hardware I wanted to experiment with.</p>

      {/* TETRIS */}
      <div className="coding-section">
        <div
          className="image-stack"
          style={{
            "--img-left": `url(${launchpad1Img})`,
            "--img-right": `url(${launchpad2Img})`,
          }}
          onClick={() => setActiveSlideshow("tetris")}>
          <img src={launchpad0Img} alt="Tetris project" />
        </div>

        <div className="text-block">
          <h3>Tetris on Launchpad</h3>
          <p>Launchpads are usually found in the music industry to produce and
          perform music. This project allows you to play Tetris on a Launchpad, <br />
          using the glowing buttons as input and display  for blocks and your personal score.</p>
        </div>
      </div>

      {/* SIMON */}
      <div className="coding-section beige-section">
        <div
          className="image-stack"
          style={{
            "--img-left": `url(${arduino1Img})`,
            "--img-right": `url(${arduino2Img})`,
          }}
          onClick={() => setActiveSlideshow("simon")}>
          <img src={arduino0Img} alt="Simon project" />
        </div>

        <div className="text-block">
          <h3>Arduino meets Simon</h3>
          <p>With an Arduino microcontroller, I was able to recreate the cult classic Simon
          using a small buzzer and four different colored LEDs. <br /> The game is controlled
          by keyboard, an additional UI shows achieved score and the previous record.</p>
        </div>
      </div>

      {/* EEG */}
      <div className="coding-section">
        <div
          className="image-stack"
          style={{
            "--img-left": `url(${eeg1Img})`,
            "--img-right": `url(${eeg2Img})`,
          }}
          onClick={() => setActiveSlideshow("eeg")}>
          <img src={eeg0Img} alt="EEG project" />
        </div>

        <div className="text-block">
          <h3>Reading Brainwaves</h3>
          <p>The latest project uses an EEG-Headband connected to an Arduino microcontroller.
          This allows the user to read their own Brainwaves. <br />
          To visualize this, a simple Avatar was created in Unity to showcase how concentrated / relaxed the user is.</p>
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeSlideshow && (
        <div
          className="coding-lightbox"
          onClick={() => setActiveSlideshow(null)}>
          <div
            className="coding-lightbox-content"
            onClick={(e) => e.stopPropagation()}>
            {slideshows[activeSlideshow]}
          </div>
        </div>
      )}
    </div>
  );
}

export default Coding;