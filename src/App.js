
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import JoinUs from "./components/JoinUs";
import OurWork from './components/ourWork';
import TheName from './components/theName';
import OurTeam  from './components/ourTeam ';
import ThirdQuote from './components/thirdQuote';
import StoreIcon from './components/storeIcon';
import Footer from './components/footer';

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="pt-10">
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}  />
            <Route path="/join-us" element={<JoinUs />} exact/>
        </Routes>
        </Router>
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

