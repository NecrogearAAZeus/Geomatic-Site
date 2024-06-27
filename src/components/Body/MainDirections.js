import React from "react";
import "./static/MainDirections.css";

function MainDirection() {
  const HeadOffice = () => {
    return (
      <div>
        <div className="headOfficeTitleWrap">
          <div className="headOfficeTitle">공간정보 기술연구소 / 공장</div>
          <div className="headOfficeButtonWrap">
            <div className="headOfficeButton1">기술연구소 / 공장</div>
            <div className="headOfficeButton2"> 본사</div>
          </div>
        </div>
        <div className="headOfficeMapBox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1629.4288672588366!2d126.85954852489833!3d35.234911346768804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718e0301d3cc0b%3A0x93ac6abdf72605b0!2z6rSR7KO86rSR7Jet7IucIOu2geq1rCDssqjri6jrsqTsspjshozroZwxNeuyiOq4uA!5e0!3m2!1sko!2skr!4v1719476277611!5m2!1sko!2skr"
            title="Head Office Location"
            width="870"
            height="500"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="headOfficeBox2"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mainDirectionWrap">
      <div className="mainDirectionTitle">오시는 길</div>
      <div className="mainDirectionBox">
        <HeadOffice />
      </div>
    </div>
  );
}

export default MainDirection;
