import { useState } from "react";

import artImg0 from './assets/art0.jpg'
import artImg1 from './assets/art1.jpg'
import artImg2 from './assets/art2.jpg'
import artImg3 from './assets/art3.jpg'
import artImg4 from './assets/art4.jpg'
import artImg5 from './assets/art5.jpg'

function ImageGrid() {

  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { src: artImg0, name: "Flamingo Confetti" },
    { src: artImg1, name: "Karminrot" },
    { src: artImg2, name: "Waldboden" },
    { src: artImg3, name: "Dissocitation Space" },
    { src: artImg4, name: "Maske Maske" },
    { src: artImg5, name: "Totem" }
  ];

  return (
    <>
      <div className="grid">
        {items.map((item, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => setSelectedImage(item)}
          >
            <img src={item.src} alt={item.name} />
            <div className="overlay">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)} // click anywhere closes
        >
          <div className="lightbox-content">
            <img src={selectedImage.src} alt="" />
            <div className="lightbox-caption">
              {selectedImage.name}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGrid;