import mindFlexImg from './assets/mindFlex.jpg'
import maskImg from './assets/mask.jpg'

function Home() {
  return (
  <div>
    <h1>Home</h1>
    <div className="section">
        <img src={mindFlexImg} alt="" />
        <div className="text">
            <h3>Hardware Programming</h3>
            <p>One of my hobbies is coding and tinkering with different kinds of electronics. <br />
            From Arduino to EEG-Headset, there is nothing more fun than soldering wires!</p>
        </div>
    </div>

    <div className="section">
        <img src={maskImg} alt="" />
        <div className="text">
            <h3>Creative Mind</h3>
            <p>I like to make art in my free time. <br /> Mostly by painting with acrylic colors,
            but using clay  <br /> or wood is almost always just as exciting!</p>
        </div>
    </div>
  </div>
  );
}

export default Home;