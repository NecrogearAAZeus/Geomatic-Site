import React from "react";
import "./static/MainLink.css";
import workShop from "../../assets/img/droneWorkShopSmall.png";
import AI from "../../assets/img/ai.png";
import DigitalTwin from "../../assets/img/digitalTwinSmall.png";
import Marine from "../../assets/img/marine.png";
import drone from "../../assets/img/drone.png";
import GeoLogo from "../../assets/img/GeomaticLogo.png";
import survey from "../../assets/img/survey.png";
import safety from "../../assets/img/safetyCheck.png";
import farm from "../../assets/img/smartFarmSmall.png";

function MainLink() {
  return (
    <div className="mainLinkBox">
      <div className="mainLinkWrap">
        <div className="mainLinkTitle">공간정보 사업소개</div>
        <div className="mainLinkBentoWrap">
          <div className="mainLinkBox1">
            <div className="mainLinkBoxTitle">드론 개발, 제조</div>
            <div className="mainLinkBoxCover"></div>
            <img
              src={workShop}
              alt="workShop"
              className="mainLinkWorkShop"
            ></img>
          </div>
          <div className="mainLinkBox2">
            <div className="mainLinkBoxTitle">
              <div>인공지능 변화탐지,</div>
              <div>AI 학습용 데이터셋 구축</div>
            </div>
            <div className="mainLinkBoxCover"></div>
            <img src={AI} alt="AI" className="mainLinkAI"></img>
          </div>
          <div className="mainLinkBox3">
            <div className="mainLinkBoxTitle">Digital Twin 용역, 관리</div>
            <div className="mainLinkBoxCover"></div>
            <img
              src={DigitalTwin}
              alt="DigitalTwin"
              className="DigitalTwin"
            ></img>
          </div>
          <div className="mainLinkBox4">
            <div className="mainLinkBoxTitle">해양 엔지니어링</div>
            <div className="mainLinkBoxCover"></div>
            <img src={Marine} alt="marine" className="marine"></img>
          </div>
          <div className="mainLinkBox5">
            <img src={GeoLogo} alt="logo" className="mainLinkLogo"></img>
          </div>
          <div className="mainLinkBox6">
            <div className="mainLinkBoxTitle">
              <div>드론항공촬영,</div>
              <div>위성원격탐사</div>
            </div>
            <img src={drone} alt="drone" className="mainLinkDrone"></img>
            <div className="mainLinkBoxCover"></div>
          </div>
          <div className="mainLinkBox7">
            <div className="mainLinkBoxTitle">지상 측량 및 GIS DB 구축</div>
            <div className="mainLinkBoxCover"></div>
            <img src={survey} alt="survey" className="mainLinkSurvey"></img>
          </div>
          <div className="mainLinkBox8">
            <div className="mainLinkBoxTitle">시설물 안전 점검</div>
            <div className="mainLinkBoxCover"></div>
            <img src={safety} alt="safety" className="mainLinkSafety"></img>
          </div>
          <div className="mainLinkBox9">
            <div className="mainLinkBoxTitle">Smart Farm 구축, 관리</div>
            <div className="mainLinkBoxCover"></div>
            <img src={farm} alt="farm" className="mainLinkFarm"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLink;
