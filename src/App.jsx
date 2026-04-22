import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './style/App.css'
import './style/About.css'
import './style/Art.css'
import "./style/Coding.css"
import './style/Contact.css'
import './style/ContactForm.css'
import './style/Home.css'
import './style/ImageGrid.css'
import './style/Slideshow.css'
import './style/Toolbar.css'

import bannerImg from './assets/banner.jpg'
import Toolbar from './Toolbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Art from './Art.jsx'
import Coding from './Coding.jsx'
import Contact from './Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header-image">
        <img src={bannerImg} alt=""/>
      </div>
      <Toolbar />
      <div className="main-container">
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/art" element={<Art />} />
           <Route path="/coding" element={<Coding />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="footer">
        <h3>Contact</h3>
        <p>Ludwig Rosenberg <br />
        72793 Pfullingen <br />
        Ludwig.Rosenberg@web.de  <br />
        +4915736305617</p>
      </div>
    </>
  )
}

export default App
