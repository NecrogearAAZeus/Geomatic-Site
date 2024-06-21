import React from "react";
import "./static/MainIntro.css";
import flask from "../../assets/img/flask.svg";
import semicondutor from "../../assets/img/semiconductor.svg";
import relationship from "../../assets/img/relationship.svg";
import agEagle from "../../assets/img/AgEagleLogo.png";
import bentley from "../../assets/img/Bentley_Logo.png";
import virtualSurveyer from "../../assets/img/VirtualSurveyer.png";
import agisoft from "../../assets/img/Agisoft_Logo.png";
import Slider from "react-slick";

function MainIntro() {
  const customerCarousel = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
  };
  return (
    <div className="mainIntroBox">
      <div className="mainIntroWrap">
        <div className="mainIntroTitle">공간정보는</div>
        <div className="mainIntroSubTitle">
          <div>
            대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄
            대충짧은글2줄대충짧은글2줄
          </div>
          <div>
            대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄
            대충짧은글2줄대충짧은글2줄
          </div>
        </div>
        <div className="mainIntroGrid1">
          <div className="mainIntroGridBox1 introContainer">
            <div className="mainIntroGridImgWrap">
              <img src={flask} alt="flask" className="flask"></img>
            </div>
            <div>
              <div className="mainIntroGridBoxTitle">
                공간정보가 추구하는것1
              </div>
              <div className="mainIntroGridBoxText">
                대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄
                대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2짧은글2줄대충짧은글
              </div>
            </div>
          </div>
          <div className="mainIntroGridBox2 introContainer">
            <div className="mainIntroGridImgWrap">
              <img src={semicondutor} alt="flask" className="flask"></img>
            </div>
            <div>
              <div className="mainIntroGridBoxTitle">
                공간정보가 추구하는것2
              </div>
              <div className="mainIntroGridBoxText">
                대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄
                대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2짧은글2줄대충짧은글
              </div>
            </div>
          </div>
          <div className="mainIntroGridBox3 introContainer">
            <div className="mainIntroGridImgWrap">
              <img src={relationship} alt="flask" className="flask"></img>
            </div>
            <div>
              <div className="mainIntroGridBoxTitle">
                공간정보가 추구하는것3
              </div>
              <div className="mainIntroGridBoxText">
                대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2줄
                대충짧은글2줄대충짧은글2줄대충짧은글2줄대충짧은글2짧은글2줄대충짧은글
              </div>
            </div>
          </div>
        </div>
        <div className="partnerContainer">
          <div className="partnerTitle">공간정보의 파트너사들</div>
          <div className="partnersWrap">
            <div className="partnerBox">
              <img src={agEagle} alt="agEagleLogo"></img>
            </div>
            <div className="partnerBox">
              <img src={bentley} alt="bentleyLogo"></img>
            </div>
            <div className="partnerBox">
              <img src={virtualSurveyer} alt="virtualSurveyerLogo"></img>
            </div>
            <div className="partnerBox">
              <img src={agisoft} alt="agisoftLogo"></img>
            </div>
          </div>
        </div>
        <div className="customerContainer">
          <div className="partnerTitle">공간정보의 주요 고객들</div>
          <div className="slider-container">
            <Slider {...customerCarousel}>
              <div className="customerBox">
                <div>
                  <img src={agEagle} alt="agEagleLogo"></img>
                </div>
              </div>
              <div className="customerBox">
                <div>
                  <img src={bentley} alt="bentleyLogo"></img>
                </div>
              </div>

              <div className="customerBox">
                <div>
                  <img src={virtualSurveyer} alt="virtualSurveyerLogo"></img>
                </div>
              </div>
              <div className="customerBox">
                <div>
                  <img src={agisoft} alt="agisoftLogo"></img>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainIntro;
