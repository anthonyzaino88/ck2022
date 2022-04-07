import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />

      {/* Make Banner on load disapear on scroll*/}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} exact />
        {/*Bio/About page*/}
        {/*Sponsours page*/}
        {/*Shop page*/}
      </Routes>
    </Router>
  );
}

export default App;
