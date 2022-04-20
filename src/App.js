import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Home from "./components/Home";
import Message from "./components/Message";
import Quote from "./components/Quote";
import Services from "./components/Services";

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
      </div>
    </div>
  );
}

export default App;
