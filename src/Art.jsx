import './style/Art.css'

import ImageGrid from "./ImageGrid.jsx";

function Art() {
  return (
    <div className="grid-container">
        <h1>Art</h1>
        <p>Painting is one of my favourite hobbies. Most of my art consists of acrylic paintings, <br />
        but sometimes I also like to experiment with other materials like clay wood or even glas.</p>
        <ImageGrid />
        <p>More on Instagram: <a href="https://instagram.com/art.by.rol" target="_blank">
        art.by.rol</a></p>
    </div>
  );
}

export default Art;