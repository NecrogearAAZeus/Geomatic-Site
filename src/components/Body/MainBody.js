import React from "react";
import Slider from "react-slick";

import "./static/MainBody.css";
import MainImgBG1 from "../../assets/img/mainImgBg1.png";
import MainImgBG2 from "../../assets/img/mainImgBg2.png";
import MainImgBG3 from "../../assets/img/mainImgBg3.png";
import MainImgBG4 from "../../assets/img/mainImgBg4.png";
import MainImgBG5 from "../../assets/img/mainImgBg5.png";

function MainBody() {
  var PauseOnHoverSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const MainText = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  function MainImgBG() {
    return (
      <div className="MainImgContainer">
        <div className="mainEmptyBox"></div>
        <div className="slider-container">
          <Slider {...PauseOnHoverSettings}>
            <div className="imgCover">
              <img src={MainImgBG1} alt="mainImgBG" className="MainImg" />
            </div>
            <div className="imgCover">
              <img src={MainImgBG2} alt="mainImgBG" className="MainImg" />
            </div>
            <div className="imgCover">
              <img src={MainImgBG3} alt="mainImgBG" className="MainImg" />
            </div>
            <div className="imgCover">
              <img src={MainImgBG4} alt="mainImgBG" className="MainImg" />
            </div>
            <div className="imgCover">
              <img src={MainImgBG5} alt="mainImgBG" className="MainImg" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
  function MainText1() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">01</div>
        <div className="mainTextSubTitle1">Digital Twin ·</div>
        <div className="mainTextSubTitle2">Ai · Smart Farm</div>
        <div className="MainTextTitle">공간정보</div>
        <div className="TitleinfoText">회사소개 보기</div>
      </div>
    );
  }
  function MainText2() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">02</div>
        <div className="mainTextSubTitle3">Digital Twin</div>
        <div className="MainTextTitle">디지털 트윈</div>
        <div className="TitleinfoText">디지털 트윈 용역, 관리 안내</div>
      </div>
    );
  }
  function MainText3() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">03</div>
        <div className="mainTextSubTitle3">Smart Farm</div>
        <div className="MainTextTitle">스마트 팜</div>
        <div className="TitleinfoText">스마트 팜 구축, 관리 안내</div>
      </div>
    );
  }
  function MainText4() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">04</div>
        <div className="mainTextSubTitle3">Product Solution</div>
        <div className="MainTextTitle">제품 솔루션</div>
        <div className="TitleinfoText">제품 더보기</div>
      </div>
    );
  }
  function MainText5() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">05</div>
        <div className="mainTextSubTitle3">Customer Inquiry</div>
        <div className="MainTextTitle">고객문의</div>
        <div className="TitleinfoText">문의사항 바로가기</div>
      </div>
    );
  }
  return (
    <div className="MainBodyWrap">
      <div className="mainFontWrap">
        <div className="mainFontBox">
          <div className="slider-container">
            <Slider {...MainText}>
              <div className="textCover">
                <MainText1 />
              </div>
              <div className="textCover">
                <MainText2 />
              </div>
              <div className="textCover">
                <MainText3 />
              </div>
              <div className="textCover">
                <MainText4 />
              </div>
              <div className="textCover">
                <MainText5 />
              </div>
            </Slider>
          </div>
          <div className="buttonWrap">
            <div className="button1"></div>
            <div className="button2"></div>
            <div className="button3"></div>
            <div className="button4"></div>
            <div className="button5"></div>
          </div>
        </div>
      </div>
      <div className="mainImgWrap">
        <MainImgBG />
      </div>
    </div>
  );
}

export default MainBody;
