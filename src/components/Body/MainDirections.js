import React from "react";
import "./static/MainDirections.css";
import LocationIcon from "../../assets/img/LocationIcon.png";
import carIcon from "../../assets/img/carIcon.svg";
import busIcon from "../../assets/img/busIcon.svg";

function MainDirection() {
  const HeadOffice = () => {
    return (
      <div>
        <div className="mainDirectionTitle">오시는 길</div>

        <div className="headOfficeTitleWrap">
          <div className="headOfficeTitle">공간정보 기술연구소 / 공장</div>
        </div>
        <div className="mainDirectionSubTitleWrap">
          <div className="mainDirectionSubTitle">
            <img
              src={LocationIcon}
              alt="loactionIcon"
              className="mainDirectionIcon"
            />
            <div>광주광역시 북구 첨단벤처소로 15번길 3</div>
          </div>
          <div className="headOfficeButtonWrap">
            <div className="headOfficeButton1">기술연구소 / 공장</div>
            <div className="headOfficeButton2"> 본사</div>
          </div>
        </div>
        <div className="headOfficeMapBox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.196472090737!2d126.85875344622667!3d35.233989051425134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718e0372fde407%3A0xd7916051eadc055b!2z6rSR7KO86rSR7Jet7IucIOu2geq1rCDssqjri6jrsqTsspjshozroZwxNeuyiOq4uCAz!5e0!3m2!1sko!2skr!4v1719537565974!5m2!1sko!2skr"
            title="Head Office Location"
            width="870"
            height="500"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
          <div className="headOfficeBox2">
            <div className="headOfficeBox2Flex">
              <div className="headOfficeBoxTextGrid">
                <div className="headOfficeBox2Img">
                  <img src={carIcon} alt="carIcon" className="carIcon" />
                </div>
                <div className="headOfficeBox2Textwrap">
                  <div>
                    <div className="HeadOfficeBox2Title">자가용 이용시</div>
                    <div className="HeadOfficeBox2Text">
                      어디어디에서 어디로가서
                      <br />
                      어디어디 주차장 이용하기
                    </div>
                  </div>
                </div>
              </div>
              <div className="headOfficeBoxTextGrid">
                <div className="headOfficeBox2Img">
                  <img src={busIcon} alt="busIcon" className="busIcon" />
                </div>
                <div className="headOfficeBox2Textwrap">
                  <div>
                    <div className="HeadOfficeBox2Title">버스 이용시</div>
                    <div className="HeadOfficeBox2Text">
                      어디어디 정류장에서 2분 도보거리
                      <br />
                      1234, 1323, 1557
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mainDirectionWrap">
      <div className="mainDirectionBox">
        <HeadOffice />
      </div>
    </div>
  );
}

export default MainDirection;
