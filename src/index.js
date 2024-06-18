import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header.js";
import reportWebVitals from "./reportWebVitals";
import MainBody from "./components/Body/MainBody.js";
import MainIntro from "./components/Body/MainIntro.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MainBody />
    <MainIntro />
  </React.StrictMode>
);

reportWebVitals();
