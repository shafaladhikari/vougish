import Icon from "../../Icons/Icon";
import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Top">
        <div className="footercontact">
          <Icon SvgName="#icon-email" clName="footericon footercontacticon" />
          <span className="footerheading">Voguish@gmail.com</span>
          <span className="footersubheading">Contact any time</span>
        </div>
        <div className="footercontact">
          <Icon
            SvgName="#icon-old-phone"
            clName="footericon footercontacticon"
          />
          <span className="footerheading">9862373901</span>
          <span className="footersubheading">Contact any time</span>
        </div>
        <div className="footercontact">
          <Icon SvgName="#icon-message" clName="footericon footercontacticon" />
          <span className="footerheading">Insta: @voguishnepal</span>
          <span className="footersubheading">Contact any time</span>
        </div>
        <Button btnClass="ContactBtn">Contact Us</Button>
      </div>
      <div className="Footer-Main">
        <div className="footerabout">
          <Logo />
          <span className="footerheading">Kathmandu, Nepal</span>
          <span className="footersubheading">9862373901</span>
          <span className="footersubheading">Email:vougish@gmail.com</span>
          <div className="footersocialicons">
            <Icon SvgName="#icon-email" clName="footericon" />
            <Icon SvgName="#icon-google-plus" clName="footericon" />
            <Icon SvgName="#icon-twitch" clName="footericon" />
            <Icon SvgName="#icon-message" clName="footericon" />
          </div>
        </div>
      </div>
      <div className="Footer-Bottom">lalala</div>
    </div>
  );
};

export default Footer;
