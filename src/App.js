import React from "react";

import Main from "./components/Main";
import JoinUs from "./components/JoinUs";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Features from "./components/Features";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="pt-10">
      <div>
        <Router>
          <Header />
          {/* <Switch> */}
            <Route path="/about-us" component={AboutUs} />
            <Route path="/services" component={Services}  />
            <Route path="/features" component={Features}  />
            <Route path="/" component={Main}  exact/>
            <Route path="/join-us" component={JoinUs}/>
        {/* </Switch> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
