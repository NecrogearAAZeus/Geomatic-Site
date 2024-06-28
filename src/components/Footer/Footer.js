import React from "react";
import "./static/Footer.css";

function Footer() {
  return (
    <div className="footerBox">
      <div className="footerWrap">
        <div className="footerinfoWrap">
          <div className="footerInfoOpacity">대표전화 : 1644 - 9396</div>
          <div className="footerInfoOpacity"> 대표팩스 : 0505 - 210 - 9396</div>
          <div className="footerInfoOpacity">email : geomatic02@naver.com</div>
          <div className="footerInfoOpacity">
            기술연구소 / 공장 : 광주광역시 북구 첨단벤처소로 15번길 3
          </div>
          <div className="footerInfoOpacity">
            본사 : 전남 나주시 정보화길 26케이원지식산업센터 405호
          </div>
          <div className="footerinfoCopy">
            copyright©2024 Geospatial
            <br />
            information.Ltd Allright Reserved
          </div>
          <div className="footerinfoFlex">
            <div>YouTube</div>
            <div>Blog</div>
            <div>E - Book</div>
          </div>
        </div>
        <div className="footerNavWrap">
          <div>
            <div className="footerMenuTitle">회사 소개</div>
            <div className="footerMenu">인사말</div>
            <div className="footerMenu">CI / BI</div>
            <div className="footerMenu">연혁</div>
            <div className="footerMenu">오시는길</div>
          </div>
          <div className="footerBusiness">
            <div className="footerMenuTitle">사업분야</div>
            <div className="footerMenu">Digital Twin</div>
            <div className="footerMenu">Smart Farm</div>
            <div className="footerMenu">연구 개발</div>
          </div>
          <div className="footerSolution">
            <div className="footerMenuTitle">제품솔루션</div>
            <div className="footerMenu">드론</div>
            <div className="footerMenu">센서, 카메라</div>
            <div className="footerMenu">소프트웨어</div>
          </div>
          <div className="footerInquiry footerMenuTitle">고객문의</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
