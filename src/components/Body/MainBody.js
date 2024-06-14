import "./static/MainBody.css";
import MainImgBG1 from "../../assets/img/mainImgBg1.png";

import { useState } from "react";

function MainBody() {
  const [ImgSlider, SetImgSlider] = useState(1);

  function MainImgBG() {
    return (
      <div className="MainImgContainer">
        <div></div>
        <div className="MainImgWarp">
          <img src={MainImgBG1} alt="mainImgBG1" className="MainImg" />
        </div>
      </div>
    );
  }
  return (
    <div className="MainBodyWarp">
      <div className="mainFontWarp">
        <div className="mainFontBox">
          <div className="mainText">
            <div className="mainTextNumber">01</div>
            <div className="mainTextSubTitle1">Digital Tiwn ·</div>
            <div className="mainTextSubTitle2">Ai · Smart Farm</div>
            <div className="MainTextTitle">공간정보</div>
            <div className="TitleinfoText">회사소개 보기</div>
          </div>
          <div className="buttonWarp">
            <div className="button1"></div>
            <div className="button2"></div>
            <div className="button3"></div>
            <div className="button4"></div>
            <div className="button5"></div>
          </div>
        </div>
      </div>
      <div className="mainImgWarp">{ImgSlider === 1 ? <MainImgBG /> : ""}</div>
    </div>
  );
}

export default MainBody;
