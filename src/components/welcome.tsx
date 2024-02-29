import "../App.css";
import { images } from "../assets/images";

function Welcome() {
  return (
    <section className="welcome">
      <div className="left welcomeChild">
        <h1>Welcome to ProSuite</h1>
        <h2>Discover the power of Software</h2>
        <p>
          Every day, our clients are faced with challenges and opportunities. We
          help them solve their problems by connecting them to information
          technology. We offer solutions that grow, empower and help businesses.
        </p>
        <div className="buttonHolder">
            <button>
                Get Started
            </button>
            <button>
                Request A Demo
            </button>
        </div>
      </div>
      <div className="right welcomeChild">
        <img src={images.laptop} alt="" />
      </div>
    </section>
  );
}

export default Welcome;
