import React from "react";
import Main from "./components/Main";
import JoinUs from "./components/JoinUs";
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
        <Footer />
    </div>
  );
  
}

export default App;

