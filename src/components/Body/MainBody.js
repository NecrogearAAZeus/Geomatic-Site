import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import "./static/MainBody.css";
import MainImgBG1 from "../../assets/img/mainImgBg1.png";
import MainImgBG2 from "../../assets/img/mainImgBg2.png";
import MainImgBG3 from "../../assets/img/mainImgBg3.png";
import MainImgBG4 from "../../assets/img/mainImgBg4.png";
import MainImgBG5 from "../../assets/img/mainImgBg5.png";

function MainBody() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  function MainBg1() {
    return (
      <div className="imgCover">
        <img src={MainImgBG1} alt="mainImgBG" className="MainImg" />
      </div>
    );
  }
  function MainBg2() {
    return (
      <div className="imgCover">
        <img src={MainImgBG2} alt="mainImgBG" className="MainImg" />
      </div>
    );
  }
  function MainBg3() {
    return (
      <div className="imgCover">
        <img src={MainImgBG3} alt="mainImgBG" className="MainImg" />
      </div>
    );
  }
  function MainBg4() {
    return (
      <div className="imgCover">
        <img src={MainImgBG4} alt="mainImgBG" className="MainImg" />
      </div>
    );
  }
  function MainBg5() {
    return (
      <div className="imgCover">
        <img src={MainImgBG5} alt="mainImgBG" className="MainImg" />
      </div>
    );
  }

  function MainText1() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">01</div>
        <div className="mainTextSubTitle1">DIGITAL TWIN ·</div>
        <div className="mainTextSubTitle2">AI · SMART FARM</div>
        <div className="MainTextTitle">공간정보</div>
        <div className="TitleinfoText">회사소개 보기</div>
      </div>
    );
  }
  function MainText2() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">02</div>
        <div className="mainTextSubTitle3">DIGITAL TWIN</div>
        <div className="MainTextTitle">디지털 트윈</div>
        <div className="TitleinfoText">디지털 트윈 용역, 관리 안내</div>
      </div>
    );
  }
  function MainText3() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">03</div>
        <div className="mainTextSubTitle3">SMART FARM</div>
        <div className="MainTextTitle">스마트 팜</div>
        <div className="TitleinfoText">스마트 팜 구축, 관리 안내</div>
      </div>
    );
  }
  function MainText4() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">04</div>
        <div className="mainTextSubTitle3">PRODUCTS SOLUTION</div>
        <div className="MainTextTitle">제품 솔루션</div>
        <div className="TitleinfoText">제품 더보기</div>
      </div>
    );
  }
  function MainText5() {
    return (
      <div className="mainText1 slideMove slideText">
        <div className="mainTextNumber">05</div>
        <div className="mainTextSubTitle3">CUSTOMER INQUIRY</div>
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
            <Slider
              autoplay={true}
              autoplaySpeed={4000}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              vertical={true}
              verticalSwiping={true}
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              pauseOnHover={true}
              dots={true}
            >
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
        </div>
      </div>
      <div className="mainImgWrap">
        <div className="MainImgContainer">
          <div className="mainEmptyBox"></div>
          <div className="slider-container">
            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              swipeToSlide={true}
              focusOnSelect={true}
              autoplay={true}
              autoplaySpeed={4000}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              pauseOnHover={true}
            >
              <div className="imgWrap">
                <MainBg1 />
              </div>
              <div className="imgWrap">
                <MainBg2 />
              </div>
              <div className="imgWrap">
                <MainBg3 />
              </div>
              <div className="imgWrap">
                <MainBg4 />
              </div>
              <div className="imgWrap">
                <MainBg5 />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
