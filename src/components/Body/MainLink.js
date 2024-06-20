import React, { useState } from "react";
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
  const [hoveredBox, setHoveredBox] = useState(null);
  const handleMouseEnter = (box) => {
    setHoveredBox(box);
  };
  const handleMouseLeave = () => {
    setHoveredBox(null);
  };
  const getBoxClassName = (box, baseClassName) => {
    return `${baseClassName} ${hoveredBox === box ? "hover" : ""}`;
  };
  const data = [
    {
      src: workShop,
      title: "드론 개발, 제조",
      boxClass: "mainLinkBox1",
      imgClass: "mainLinkWorkShop",
    },
    {
      src: AI,
      title: "인공지능 변화탐지, AI 학습용 데이터셋 구축",
      boxClass: "mainLinkBox2",
      imgClass: "mainLinkAI",
    },
    {
      src: DigitalTwin,
      title: "Digital Twin 용역, 관리",
      boxClass: "mainLinkBox3",
      imgClass: "DigitalTwin",
    },
    {
      src: Marine,
      title: "해양 엔지니어링",
      boxClass: "mainLinkBox4",
      imgClass: "marine",
    },
    {
      src: GeoLogo,
      title: "",
      boxClass: "mainLinkBox5",
      imgClass: "mainLinkLogo",
    },
    {
      src: drone,
      title: "드론항공촬영, 위성원격탐사",
      boxClass: "mainLinkBox6",
      imgClass: "mainLinkDrone",
    },
    {
      src: survey,
      title: "지상 측량 및 GIS DB 구축",
      boxClass: "mainLinkBox7",
      imgClass: "mainLinkSurvey",
    },
    {
      src: safety,
      title: "시설물 안전 점검",
      boxClass: "mainLinkBox8",
      imgClass: "mainLinkSafety",
    },
    {
      src: farm,
      title: "Smart Farm 구축, 관리",
      boxClass: "mainLinkBox9",
      imgClass: "mainLinkFarm",
    },
  ];
  return (
    <div className="mainLinkBox">
      <div className="mainLinkWrap">
        <div className="mainLinkTitle">공간정보 사업소개</div>
        <div className="mainLinkBentoWrap">
          {data.map((item, index) => (
            <div
              key={index}
              className={getBoxClassName(`box${index + 1}`, item.boxClass)}
              onMouseEnter={() => handleMouseEnter(`box${index + 1}`)}
              onMouseLeave={handleMouseLeave}
            >
              {item.title && (
                <div className="mainLinkBoxTitle">{item.title}</div>
              )}
              <div className="mainLinkBoxCover"></div>
              <img
                src={item.src}
                alt={item.boxClass}
                className={item.imgClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainLink;
