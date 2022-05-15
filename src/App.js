
import React from "react";
import Main from "./components/Main";
import JoinUs from "./components/JoinUs";
import OurWork from './components/ourWork';
import TheName from './components/theName';
import OurTeam  from './components/ourTeam ';
import ThirdQuote from './components/thirdQuote';
import StoreIcon from './components/storeIcon';
import Footer from './components/footer';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    
  return (
    <div className="pt-10">
      <div className="pb:20">
        <Router>
          <Routes>
            <Route path="/" element={<Main />}  />
            <Route path="/:joinUs" element={<JoinUs />} exact/>
        </Routes>
        </Router>
      
      </div>
        <OurWork />  
        <TheName />
        <OurTeam />
        <ThirdQuote />
        <StoreIcon />
        <Footer />
    </div>
  );
  
}

export default App;

