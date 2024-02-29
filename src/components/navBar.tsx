import { useState } from "react";
import "../App.css";
import { images } from "../assets/images";

function NavBar() {
  const navItems = ["HOME", "ABOUT", "SOLUTIONS", "CONTACT"];
  const [showSideNav, setSHowSideNav] = useState(false)

  return (
    <>
     <nav className="navCont">
      <ul>
        <li className="logo">
        <img src={images.logo} alt="logo" />
        </li>
        <span></span>
        {navItems?.map((value, index) => {
          return <li key={index.toString()}>{value}</li>;
        })}
        <li>
          <button>REQUEST A DEMO</button>
        </li>
      </ul>
      <div className="logoMobile">
      <img src={images.logo} alt="logo" />
      <span></span>
      <img onClick={()=>{
        setSHowSideNav(!showSideNav)
      }} id="toggleIcon" src={images.toggleIconn} alt="" />
      </div>
    </nav>
    {
      showSideNav && (
        <ul className="offCanvasMenu" onClick={()=>{
          setSHowSideNav(false)
        }}>
        {navItems?.map((value, index) => {
          return <li key={index.toString()}>{value}</li>;
        })}
        <li>
          <button>REQUEST A DEMO</button>
        </li>
      </ul>

      )
    }
    
    
    </>
   
  );
}

export default NavBar;
