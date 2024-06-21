import React from "react";
import "./static/MainProducts.css";
import TerraPoint from "../../assets/img/terraPoint.png";
import DJIH20T from "../../assets/img/DJIH20T.png";
import SoftwareMockUP from "../../assets/img/softwareMockUp.png";

function MainProducts() {
  return (
    <div className="mainProductWrap">
      <div className="mainProductBox">
        <div className="mainProductTitle">제품 소개</div>
        <div className="mainProdcutGrid">
          <div className="mainGridBox1">
            <div className="MainProductsGridImgWrap">
              <img
                src={TerraPoint}
                alt="terraPoint"
                className="terraPoint mainProductGridImg"
              ></img>
            </div>
            <div className="mainGridBoxTextArea">
              <div className="mainGridBoxTextAreaTitle">드론</div>
              <div className="mainGridBoxTextAreaText">
                공간정보가 직접 설계, 제조한 드론부터 DJI, AgEagle, Autel
                Robotics 등의 드론들까지 지금 만나보세요.
              </div>
              <div className="mainGridBoxTextAreaButton">더보기</div>
            </div>
          </div>
          <div className="mainGridBox2">
            <div className="MainProductsGridImgWrap">
              <img
                src={DJIH20T}
                alt="DJIH20T"
                className="DJIH20T mainProductGridImg"
              ></img>
            </div>
            <div className="mainGridBoxTextArea">
              <div className="mainGridBoxTextAreaTitle">센서, 카메라</div>
              <div className="mainGridBoxTextAreaText">
                드론에 부착하는 다양한 카메라와 센서들을 <br />
                목적에 따라 찾아보세요.
              </div>
              <div className="mainGridBoxTextAreaButton">더보기</div>
            </div>
          </div>
          <div className="mainGridBox3">
            <div className="MainProductsGridImgWrap">
              <img
                src={SoftwareMockUP}
                alt="softwareMockUP"
                className="softwareMockUP mainProductGridImg"
              ></img>
            </div>
            <div className="mainGridBoxTextArea">
              <div className="mainGridBoxTextAreaTitle">소프트웨어</div>
              <div className="mainGridBoxTextAreaText">
                Bently 사에서 제공하는 다양한 소프트웨어들과, <br />그 밖에
                강력하고 편리한 소프트웨어들을 살펴보세요.
              </div>
              <div className="mainGridBoxTextAreaButton">더보기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
