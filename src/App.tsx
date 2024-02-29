
import './App.css'
import Footer from './components/footer'
import NavBar from './components/navBar'
import Solutions from './components/solutions'
import Welcome from './components/welcome'
import WhySection from './components/whySection'


function App() {


  return (
    <>
     <NavBar/>
     <Welcome/>
     <div className='splitter'>
      <span></span>
      <p>Why<span>ProSuite</span></p>
     </div>
     <WhySection/>
     <div className='splitter'>
      <span></span>
      <p>Our<span>Solutions</span></p>
     </div>
     <Solutions/>
     <div className="coloredSplitter">
      <p>We'd love to show you how our solution works</p>
      <button>REQUEST A DEMO</button>
     </div>
     <Footer/>

      
    </>
  )
}

export default App
