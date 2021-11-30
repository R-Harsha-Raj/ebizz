import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Ebizz8.png";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#eb4034"
      burgerColorHover="#a6d24"
      logo={logo}
      logoWidth="20vmax"
      navColor1="rgba(115, 119, 125, 1.0)"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4043"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIconColor="rgba(35,35,35,0.8)"
      searchIconColor="rgba(35,35,35,0.8)"
      cartIconColor="rgba(35,35,35,0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIconColorHover="eb4034"
      cartIconMargin="1vmax"
    />
  );
};

export default Header;
