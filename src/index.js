import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header.js";
import reportWebVitals from "./reportWebVitals";
import MainBody from "./components/Body/MainBody.js";
import MainIntro from "./components/Body/MainIntro.js";
import MainLink from "./components/Body/MainLink.js";
import MainProducts from "./components/Body/MainProducts.js";
import MainEmail from "./components/Body/MainEmail.js";
import Footer from "./components/Footer/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MainBody />
    <MainIntro />
    <MainLink />
    <MainProducts />
    <MainEmail />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
