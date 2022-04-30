import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Home from "./components/Home";
import Message from "./components/Message";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Slider from "./components/Slider";
import OurWork from './components/ourWork';
import TheName from './components/theName';
import OurTeam  from './components/ourTeam ';
import ThirdQuote from './components/thirdQuote';
import StoreIcon from './components/storeIcon';
import Footer from './components/footer';

function App() {
  return (
    <div className="pt-10">
      <div>
        <Home />
        <Message />
        <AboutUs />
        <Quote />
        <Services />
        <Features />
        <Slider />
        <OurWork /> 
        <TheName />
        <OurTeam />
        <ThirdQuote />
        <StoreIcon />
        <Footer />
      </div>
    </div>
  );
}

export default App;
