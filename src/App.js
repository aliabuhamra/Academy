import React from "react";

import Main from "./components/Main";
import JoinUs from "./components/JoinUs";
// import Home from "./components/Home";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from "./components/Header";

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
      </div>
    </div>
  );
}

export default App;
