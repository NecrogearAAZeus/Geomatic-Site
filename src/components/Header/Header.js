import "./static/Header.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import GeomaticLogo from "../../assets/img/GeomaticLogo.png";
import KrFlag from "../../assets/img/krFlag.png";
import EnFlag from "../../assets/img/enFlag.png";

function Header() {
  const [componyInfoHovered, setComponyInfoHovered] = useState(false);
  const [businessHovered, setBusinessHovered] = useState(false);
  const [productHovered, setProductHovered] = useState(false);
  const [languageHovered, setLanguageHovered] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const addFixed = document.querySelector(".headerWrap");
    const addHeight = document.querySelector(".headerSafty");
    if (isFixed) {
      addFixed.classList.add("fixed");
      addHeight.classList.add("addHeight");
    } else {
      addFixed.classList.remove("fixed");
      addHeight.classList.remove("addHeight");
    }
  }, [isFixed]);

  function ComponyInfoMenu() {
    return (
      <div className="infoWrap">
        <Link to="greetings" className="linkStyle">
          <div>인사말</div>
        </Link>
        <Link to="cibi" className="linkStyle">
          <div>CI / BI</div>
        </Link>
        <Link to="companyhistory" className="linkStyle">
          <div>연혁</div>
        </Link>
        <Link to="directions" className="linkStyle">
          <div>오시는 길</div>
        </Link>
      </div>
    );
  }
  function BusinessMenu() {
    return (
      <div className="BusinessWrap">
        <Link to="digitaltwin" className="linkStyle">
          <div>Digital Twin</div>
        </Link>
        <Link to="smartfarm" className="linkStyle">
          <div>Smart Farm</div>
        </Link>
        <Link to="r&d" className="linkStyle">
          <div>연구 / 개발</div>
        </Link>
      </div>
    );
  }
  function ProductMenu() {
    return (
      <div className="productWrap">
        <Link to="drone" className="linkStyle">
          <div>드론</div>
        </Link>
        <Link to="sensor&camera" className="linkStyle">
          <div>센서 / 카메라</div>
        </Link>
        <Link to="software" className="linkStyle">
          <div>소프트웨어</div>
        </Link>
      </div>
    );
  }
  function Language() {
    return (
      <div>
        <div className="languageWrap">
          EN
          <img src={EnFlag} alt="EnFlag" className="EnFlag" />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <div className="headerWrap">
          <Link to="/">
            <img src={GeomaticLogo} alt="logo" className="GeoLogo" />
          </Link>
          <div className="GnbWrap">
            <div
              className="componyInfo"
              onMouseEnter={() => setComponyInfoHovered(true)}
              onMouseLeave={() => setComponyInfoHovered(false)}
            >
              회사소개
              <svg
                id="componyInfoArrowId"
                data-name=" componyInfoArrowDataName  q"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 9"
                className={
                  componyInfoHovered
                    ? "componyInfoArrow hovered"
                    : "componyInfoArrow"
                }
              >
                <defs></defs>
                <path d="M9,9c-.18,0-.35-.06-.49-.19L.2,1.1C-.07.85-.07.44.2.19.47-.06.91-.06,1.18.19l7.82,7.26L16.82.19c.27-.25.71-.25.98,0s.27.66,0,.91l-8.31,7.71c-.14.13-.31.19-.49.19Z" />
              </svg>
              {componyInfoHovered && <ComponyInfoMenu />}
            </div>
            <div
              className="businessInfo"
              onMouseEnter={() => setBusinessHovered(true)}
              onMouseLeave={() => setBusinessHovered(false)}
            >
              사업분야
              <svg
                id="componyInfoArrowId"
                data-name=" componyInfoArrowDataName  q"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 9"
                className={
                  businessHovered
                    ? "componyInfoArrow hovered"
                    : "componyInfoArrow"
                }
              >
                <defs></defs>
                <path d="M9,9c-.18,0-.35-.06-.49-.19L.2,1.1C-.07.85-.07.44.2.19.47-.06.91-.06,1.18.19l7.82,7.26L16.82.19c.27-.25.71-.25.98,0s.27.66,0,.91l-8.31,7.71c-.14.13-.31.19-.49.19Z" />
              </svg>
              {businessHovered && <BusinessMenu />}
            </div>

            <div
              className="productInfo"
              onMouseEnter={() => setProductHovered(true)}
              onMouseLeave={() => setProductHovered(false)}
            >
              제품솔루션
              <svg
                id="componyInfoArrowId"
                data-name=" componyInfoArrowDataName  q"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 9"
                className={
                  productHovered
                    ? "componyInfoArrow hovered"
                    : "componyInfoArrow"
                }
              >
                <defs></defs>
                <path d="M9,9c-.18,0-.35-.06-.49-.19L.2,1.1C-.07.85-.07.44.2.19.47-.06.91-.06,1.18.19l7.82,7.26L16.82.19c.27-.25.71-.25.98,0s.27.66,0,.91l-8.31,7.71c-.14.13-.31.19-.49.19Z" />
              </svg>
              {productHovered && <ProductMenu />}
            </div>
            <Link to="inquiry" className="linkStyle">
              <div className="inquiry">고객문의</div>
            </Link>
            <div
              className="language"
              onMouseEnter={() => setLanguageHovered(true)}
              onMouseLeave={() => setLanguageHovered(false)}
            >
              KR
              {languageHovered && <Language />}
              <img src={KrFlag} alt="KrFlag" className="KrFlag" />
            </div>
          </div>
        </div>
        <div className="headerSafty"></div>
      </div>
    </Router>
  );
}

export default Header;
