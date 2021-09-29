import React from "react";
import Input from "./input";
import UserInput from "./InputUser";
import Images from "./Image";
import img1 from "../image/ronaldo.jpg";

import {
  FaFacebook,
  FaHome,
  FaTv,
  FaBuilding,
  FaUserFriends,
  FaPlaystation,
  FaSquare,
  FaFacebookMessenger,
  FaAmbulance,
  FaArrowDown,
} from "react-icons/fa";

const Fonts = () => {
  return (
    <div className="headIcon">
      {" "}
      <div className="leftIcon">
        <FaFacebook />
        <Input placeholder="Search Facebook" className="searchInput" />
      </div>
      <div className="middleIcon">
        <FaHome className="middle" />
        <FaTv className="middle" />
        <FaBuilding className="middle" />
        <FaUserFriends className="middle" />
        <FaPlaystation className="middle" />
      </div>
      <div className="rightIcon">
        <Images image={img1} className="img" />
        <UserInput name="Sanam" />
        <FaSquare className="middleBar" />
        <FaFacebookMessenger className="middleBar" />
        <FaAmbulance className="middleBar" />
        <FaArrowDown className="middleBar" />
      </div>
    </div>
  );
};
export default Fonts;
