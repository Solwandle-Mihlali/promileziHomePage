import { images } from "../assets/images";

function Footer() {
  const services = [
    "ProSuite Risk",
    "ProSuite Docs",
    "ProSuite Asset",
    "ProSuite Performance",
  ];

  const links = [
    "Home",
    "About",
    "Solutions",
    "Contact",
    "Request a Demo",
  ];
  return (
    <div className="footer">
      <div className="top">
        <ul>
          <li>
            <img src={images.logoWhite} alt="" />
          </li>
          <li>Service</li>
          <li>Links</li>
          <li>Contact Us</li>
        </ul>
        <ul className="footerDetails">
          <li>
            ProSuite is a suite of cloud-based platforms which aims at
            transforming and automating enterprise tasks. Our solutions focus on
            user experience and easy-to-use tools including Asset Management,
            Risk Management and Perfomance Management.
          </li>
          <li>
            {services?.map((v, i) => {
              return <p key={i}>{v}</p>;
            })}
          </li>
          <li>
          {links?.map((v, i) => {
              return <p key={i}>{v}</p>;
            })}
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            morbi praesent nulla tempor sagittis. Curabitur donec cursus donec
            risrdum nullam orci sit dictum. Molestie nunc sed amet vulputate in.
            Condimentum mi massa id interdum risus, tortor nunc mauris.
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p>2024 (c) ProSuite. All rights reserved.</p>
        <p>Privacy Policy</p>
        <span>
            
        </span>
      </div>
    </div>
  );
}

export default Footer;
