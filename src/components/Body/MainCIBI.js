import React from "react";

import "./static/MainCIBI.css";
import LOGO from "../../assets/img/LOGO.png";
import TerraSense from "../../assets/img/TerraSenseLogo.png";
import NongDam from "../../assets/img/NongDamLogo.png";
function MainCIBI() {
  return (
    <div className="mainCIBIWrap">
      <div className="mainCIBITitle"> CI / BI</div>
      <div className="mainCIBIBox">
        <div className="mainCIBIFlex1">
          <div className="mainCIBILogoBox">
            <img src={LOGO} alt="GeomaticLogo" className="mainCIBILogo" />
          </div>
          <div className="MainCIBITextTitle">공간정보 로고</div>
          <div className="mainCIBITextBox">
            (주)공간정보는 드론, 측량, IT 기술로 현실 세계를 3차원 디지털 트윈
            환경에서 볼 수 있는 세상을 꿈꾸고 있습니다. <br />
            공간정보의 CI는 역동적으로 순환하는 바람개비와 푸른 지구를
            표방합니다. 형상에서는 산과 물을 품고 있는 공간정보의 마음을 볼 수
            있고,
            <br />
            파랑과 녹색에는 하늘과 바다와 대지를 담았습니다.
          </div>
        </div>
        <div className="mainCIBIFlex2">
          <div className="mainCIBTerraSenseLogoBox">
            <img
              src={TerraSense}
              alt="TerraSenseLogo"
              className="mainCIBITerraSenseLogo"
            />
          </div>
          <div className="MainCIBITextTitle">TerraSense 로고</div>
          <div className="mainCIBITextBox">
            TERRASENSE는 약자인 TS로도 읽힐 수 있는 형태로서 검은색 점들은
            라틴어로 지구를 뜻하는 “Terra”의 T를 표현하고 <br />
            땅, 대지와 x, y 좌표적들을 의미하며 생명을 의미하는 주황색 점과 선은
            “Sense”의 S를 표현하여 T 검은색 점들과 선으로 <br />
            연결 인간과 자연 생명현상 과정에서 눈에 보이지 않는 변화를 센서로
            감지하여 정량화시키는 표현이 역동적이면서도 <br />
            독창적인 공간 정보 클라우드 플랫폼 서비스를 추구하고자 하는 의지의
            표현입니다.
          </div>
        </div>
        <div className="mainCIBIFlex3">
          <div className="mainCIBNongDamoBox">
            <img
              src={NongDam}
              alt="NongDamLogo"
              className="mainCIBNongDamLogo"
            />
          </div>
          <div className="MainCIBITextTitle">NongDam 로고</div>
          <div className="mainCIBITextBox mainCIBITextBoxMarginBottom">
            농담은 "농업에 마음의 담다"의 약자로서 노지스마트농업 통합관제시스템
            상표 입니다. 스마트 기술을 통해 무인자동화 농업을
            <br /> 이루는 의미를 담아 표현하였습니다.
          </div>
          <div className="mainCIBITextBox2">
            ​스마트, 혁신 (파랑) <br />
            농업 (초록) <br /> 편의, 서비스 제공 (노랑)
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCIBI;
