import React from "react";
import "./style.scss";
import IconTweeter from "./images/tweeter.png";
import IconDiscord from "./images/discord.png";
import IconTelegram from "./images/telegram.png";
import BorderFooterImg from "./images/border-footer.png";
const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__heading">Join community us</h3>
      <div className="footer-social">
        <img className="footer-social__img" src={BorderFooterImg} alt="" />
        <a href="/" className="footer-social-link">
          <img src={IconTweeter} alt="" />
        </a>
        <a href="/" className="footer-social-link">
          <img src={IconTelegram} alt="" />
        </a>
        <a href="/" className="footer-social-link">
          <img src={IconDiscord} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
