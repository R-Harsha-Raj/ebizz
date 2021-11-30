import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="leftFooter">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>E-BIZZ</h1>
        <p>Quality is the Corner Stone.</p>
        {/* <small>Buy it..</small> */}
        <p>Copyrights 2021 &copy; R-Harsha-Raj</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://github.com/R-Harsha-Raj">Instagram</a>
        <a href="http://github.com/R-Harsha-Raj">Youtube</a>
        <a href="http://github.com/R-Harsha-Raj">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
