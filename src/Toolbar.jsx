import './style/Toolbar.css'
import { NavLink } from "react-router-dom";

function Toolbar() {
  return (
    <div className="toolbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/art">Art</NavLink>
      <NavLink to="/coding">Coding</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Toolbar;