import "./static/Header.css";
import GeomaticLogo from "../../assets/img/GeomaticLogo.png";
import KrFlag from "../../assets/img/krFlag.png";
import EnFlag from "../../assets/img/enFlag.png";

import { useState } from "react";
function Header() {
  const [componyInfoHovered, setComponyInfoHovered] = useState(false);
  const [businessHovered, setBusinessHovered] = useState(false);
  const [productHovered, setProductHovered] = useState(false);
  const [languageHovered, setLanguageHovered] = useState(false);
  function ComponyInfoMenu() {
    return (
      <div className="infoWrap">
        <div>인사말</div>
        <div>CI / BI</div>
        <div>연혁</div>
        <div>오시는 길</div>
      </div>
    );
  }
  function BusinessMenu() {
    return (
      <div className="BusinessWrap">
        <div>Digital Tiwn</div>
        <div>Smart Farm</div>
        <div>연구 / 개발</div>
      </div>
    );
  }
  function ProductMenu() {
    return (
      <div className="productWrap">
        <div>드론</div>
        <div>센서 / 카메라</div>
        <div>소프트웨어</div>
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
    <div className="headerWrap">
      <a href="#">
        <img src={GeomaticLogo} alt="logo" className="GeoLogo" />
      </a>
      <div className="GnbWrap">
        <div
          className="componyInfo"
          onMouseEnter={() => setComponyInfoHovered(true)}
          onMouseLeave={() => setComponyInfoHovered(false)}
        >
          회사소개
          {componyInfoHovered && <ComponyInfoMenu />}
        </div>
        <div
          className="businessInfo"
          onMouseEnter={() => setBusinessHovered(true)}
          onMouseLeave={() => setBusinessHovered(false)}
        >
          사업분야
          {businessHovered && <BusinessMenu />}
        </div>

        <div
          className="productInfo"
          onMouseEnter={() => setProductHovered(true)}
          onMouseLeave={() => setProductHovered(false)}
        >
          제품솔루션
          {productHovered && <ProductMenu />}
        </div>
        <div className="inquiry">고객문의</div>
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
  );
}

export default Header;
