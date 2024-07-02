import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const [result, setResult] = React.useState("Subscribe");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Subscribing...");
    const formData = new FormData(event.target);

    formData.append("access_key", "01d5a544-75cd-40b0-bf08-9bfe849db363");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Internal Server Error");
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>
            I am a Full Stack developer from, India with 3 years of experience
            in companies like Dvertex Info System, Technosoft Pvt. Ltd.
          </p>
        </div>
        <div className="footer-top-right">
          <form onSubmit={onSubmit} className="footer-email-form">
            <div className="footer-email-input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="footer-subscribe">
              {result}
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Ritesh Kumar Shikarwar. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
