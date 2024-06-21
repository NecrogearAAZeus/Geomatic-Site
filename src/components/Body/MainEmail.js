import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./static/MainEmail.css";
import email from "../../assets/img/email.png";

function MainEmail() {
  const [formData, setFormData] = useState({
    affiliation: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_o4m5jwj",
        "template_0ck0mo8",
        formData,
        "zTh8uXvPjeBwL-6la"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };
  return (
    <div className="mainEmailBox">
      <div className="mainEmailWrap">
        <div className="mainEmailImgBox">
          <div className="mainEmailImgTextArea">
            <div></div>
            <div className="mainEmailImgTextAreaFlex">
              <div>
                <div className="mainEmailImgTextAreaTitle">
                  공간정보에 문의하기
                </div>
                <div className="mainEmailImgTextAreaText">
                  공간정보가 하는 사업, 용역, 제품 등 으로 문의가 필요하시다면
                  <br />
                  연락처를 남겨주실 시 빠른 시일내에 답변 해드리겠습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="mainEmailImgBlack"></div>
          <img src={email} alt="email" className="mainEmailImgBoxEmail"></img>
        </div>
        <div className="mainEmailFunctionBox">
          <form onSubmit={handleSubmit}>
            <div className="mainEmailFunctionBoxAffiliation">
              <label>소속</label>
              <input
                className="mainEmailAffiliation"
                type="text"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mainEmailFunctionBoxName">
              <label>이름</label>
              <input
                className="mainEmailName"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mainEmailFunctionBoxPhone">
              <label>전화번호</label>
              <input
                className="mainEmailPhone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mainEmailFunctionBoxEmail">
              <label>이메일</label>
              <input
                className="mainEmailEmail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mainEmailFunctionBoxMessage">
              <label>내용</label>
              <textarea
                className="mainEmailMassage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="mainEmailFunctionBoxSend">
              전송
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainEmail;
