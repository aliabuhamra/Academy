import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import JoinUs from "./components/JoinUs";
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
        <Footer />
      </div>
    </div>
  );
}

export default App;

