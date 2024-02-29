import { images } from "../assets/images";

function WhySection() {
    return (
      <section className="why">
        <div className="box">
           <img src={images.laptop} alt="logo" />
           <h1>Comprehensive Management Suite</h1>
           <p>ProSuite is a one-stop solution for enterprise operations, offering services from asset tracking to compliance management.</p>
        </div>
        <div className="box">
           <img src={images.laptop} alt="logo" />
           <h1>User-Friendly Design</h1>
           <p>With its emphasis on user experience and easy-to-use tools, ProSuite transforms complex tasks into simple operations..</p>
        </div>
        <div className="box">
           <img src={images.laptop} alt="logo" />
           <h1>Cloud-Based Solution</h1>
           <p>As a flexible, cloud-based suite, ProSuite ensures business continuity and scalability, allowing businesses to manage their operations anytime, anywhere..</p>
        </div>
      </section>
    )
  }
  
  export default WhySection;
  