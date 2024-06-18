import React from "react";
import "./static/MainIntro.css";
import flask from "../../assets/img/flask.svg";
import semicondutor from "../../assets/img/semiconductor.svg";
import relationship from "../../assets/img/relationship.svg";

function MainIntro() {
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
      </div>
    </div>
  );
}

export default MainIntro;
