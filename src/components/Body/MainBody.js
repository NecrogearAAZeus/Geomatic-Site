import "./static/MainBody.css";
import MainImgBG1 from "../../assets/img/mainImgBg1.png";

import { useState } from "react";

function MainBody() {
  const [ImgSlider] = useState(1);

  function MainImgBG() {
    return (
      <div className="MainImgContainer">
        <div className="mainEmptyBox"></div>
        <div className="mainImgBox">
          <img src={MainImgBG1} alt="mainImgBG1" className="MainImg" />
        </div>
      </div>
    );
  }
  function MainText1() {
    return (
      <div className="mainText1">
        <div className="mainTextNumber">01</div>
        <div className="mainTextSubTitle1">Digital Tiwn ·</div>
        <div className="mainTextSubTitle2">Ai · Smart Farm</div>
        <div className="MainTextTitle">공간정보</div>
        <div className="TitleinfoText">회사소개 보기</div>
      </div>
    );
  }
  return (
    <div className="MainBodyWrap">
      <div className="mainFontWrap">
        <div className="mainFontBox">
          {ImgSlider === 1 ? <MainText1 /> : ""}
          <div className="buttonWrap">
            <div className="button1"></div>
            <div className="button2"></div>
            <div className="button3"></div>
            <div className="button4"></div>
            <div className="button5"></div>
          </div>
        </div>
      </div>
      <div className="mainImgWrap">{ImgSlider === 1 ? <MainImgBG /> : ""}</div>
    </div>
  );
}

export default MainBody;
