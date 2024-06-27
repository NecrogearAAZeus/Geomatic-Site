import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header.js";
import reportWebVitals from "./reportWebVitals";
import MainBody from "./components/Body/MainBody.js";
import MainIntro from "./components/Body/MainIntro.js";
import MainLink from "./components/Body/MainLink.js";
import MainProducts from "./components/Body/MainProducts.js";
import MainEmail from "./components/Body/MainEmail.js";
import MainCeoGreetings from "./components/Body/MainCeoGreetings.js";
import Footer from "./components/Footer/Footer.js";
import MainCompanyInfo from "./components/Body/MainCompanyInfo.js";
import MainCIBI from "./components/Body/MainCIBI.js";
import MainDirection from "./components/Body/MainDirections.js";

const MainPage = () => (
  <div>
    <MainBody />
    <MainIntro />
    <MainLink />
    <MainProducts />
    <MainEmail />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/greetings" element={<MainCeoGreetings />} />
        <Route path="/companyInfo" element={<MainCompanyInfo />} />
        <Route path="/cibi" element={<MainCIBI />} />
        <Route path="/directions" element={<MainDirection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
