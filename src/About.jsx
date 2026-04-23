import profileImg from './assets/profile.jpeg'

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-section">
        <img src={profileImg} alt="Profile" />
        <div className="description">
          <h3>Who I Am</h3>
          <p>My Name is Ludwig Rosenberg and I am 26 years old. <br />
          Right now, I am living
          in Germany in a city named Pfullingen. <br />
          I studied Media- and Communication Informatics at the Reutlinger Hochschule <br />
          and made my Masters Degree in Interactive Media
          at the Martin-Luther Univeristät in Halle (Saale). <br /> <br />
          In my free time I like to play video games or create art. I also play cello and piano.</p>
        </div>
      </div>
    </div>
  );
}

export default About;