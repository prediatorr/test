import { NavLink } from "react-router-dom";
import "./css/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img height="35" width={120} src="barefootlogo1.png"></img>
      </div>
      <ul className="list-links">
        <li className="linkm">
          <NavLink to="spashottubs">Spas & Hot Tubs</NavLink>
        </li>
        <li className="linkm">
          <NavLink to="swimspas">Swim Spas</NavLink>
        </li>
        <li className="linkm">
          <NavLink to="fitnessspas">Fitness Spas</NavLink>
        </li>
        <li className="linkm">
          <NavLink to="assessories">Accessories</NavLink>
        </li>
        <li className="linkm">
          <NavLink to="discover">Discover</NavLink>
        </li>
        <li className="linkm">
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
      <button className="btn navbtn">Find Your Spa</button>
    </div>
  );
};

export default Nav;
