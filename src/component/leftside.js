import React from "react";
import {
  FaArrowDown,
  FaFlag,
  FaHome,
  FaTv,
  FaUserFriends,
  FaCamera,
  FaSearch,
  FaSign,
} from "react-icons/fa";
import UserInput from "./InputUser";
import NameItem from "../listItem";
import img1 from "../image/ronaldo.jpg";
import Images from "./Image";
import Layout from "./Layout";

const LeftSide = () => {
  return (
    <div className="seccondContainer">
      <div className="sidebar">
        <div className="imgItem">
          <Images image={img1} className="img" />
          <UserInput name="Sanam Tamang" className="name" />
        </div>
        <div className="nameitem">
          <FaUserFriends className="lists" />
          <NameItem namelist="Friends" />
        </div>
        <div className="nameitem">
          <FaHome className="lists" />
          <NameItem namelist="Marketplace" />
        </div>

        <div className="nameitem">
          <FaFlag className="lists" />
          <NameItem namelist="Pages" />
        </div>
        <div className="nameitem">
          <FaUserFriends className="lists" />
          <NameItem namelist="Groups" />
        </div>
        <div className="nameitem">
          <FaTv className="lists" />
          <NameItem namelist="Watch" />
        </div>
        <div className="nameitem">
          <FaArrowDown className="lists" />
          <NameItem namelist="See More" />
        </div>
      </div>
      <Layout />

      <div class="chatBox">
        <div className="onlineSectorLogo">
          <UserInput name="Contacts" />
          <div>
            <FaCamera className="chatIcon" />
            <FaSearch className="chatIcon" />
            <FaSign className="chatIcon" />
          </div>
        </div>

        <div className="onlineSector">
          <Images image={img1} className="img" />
          <UserInput name="Sanam Tamang" className="name" />
        </div>
        <div className="onlineSector">
          <Images image={img1} className="img" />
          <UserInput name="Sudip Tamang" className="name" />
        </div>
        <div className="onlineSector">
          <Images image={img1} className="img" />
          <UserInput name="Sarita  Tamang" className="name" />
        </div>
        <div className="onlineSector">
          <Images image={img1} className="img" />
          <UserInput name="Ramesh Syangtan" className="name" />
        </div>
        <div className="onlineSector">
          <Images image={img1} className="img" />
          <UserInput name="Dipesh Waiba" className="name" />
        </div>
        <div className="onlineSector">
          <Images image={img1} className="img" />
          <UserInput name="Ramesh Waiba" className="name" />
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
