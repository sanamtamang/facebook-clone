import React from "react";
import Images from "./Image";
import img3 from "../image/tamang.jpg";
import img2 from "../image/sanam.jpg";
import img1 from "../image/ronaldo.jpg";
import img4 from "../image/view.jpg";
import Input from "./input";

import {
  FaPhotoVideo,
  FaCreativeCommonsRemix,
  FaVideo,
  FaGlobe,
  FaThumbsUp,
  FaComment,
  FaShare,
} from "react-icons/fa";

const Layout = () => {
  return (
    <div className="main">
      <div className="images">
        <div className="textWrap">
          <Images image={img2} className="img2" />
          <button className="button">+</button>
          <span className="wrap"> Create Story </span>
        </div>

        <div className="textWrap">
          <Images image={img2} className="img2" />
          <Images image={img3} className="img3" />
          <span className="wrap"> Ramesh Syangtan </span>
        </div>
        <div className="textWrap">
          <Images image={img2} className="img2" />
          <Images image={img3} className="img3" />

          <span className="wrap"> Sudip Tamang </span>
        </div>
        <div className="textWrap">
          <Images image={img2} className="img2" />
          <Images image={img3} className="img3" />

          <span className="wrap"> Tilak kc </span>
        </div>
        <div className="textWrap">
          <Images image={img2} className="img2" />
          <Images image={img3} className="img3" />

          <span className="wrap"> Karshang Dorju Tamang</span>
        </div>
        <div className="textWrap">
          <Images image={img2} className="img2" />
          <Images image={img3} className="img3" />

          <span className="wrap"> Rabindra Syangtan </span>
        </div>
      </div>
      <div className="homeSection">
        <div className="pageHome">
          <Images image={img1} className="img" />
          <Input
            placeholder="What's on your mind, Sanam?"
            className="statusInput"
          />

          <hr />
          <div className="homepage">
            <div className="imgItem ">
              <FaVideo />
              <span className="name">Live Video</span>
            </div>
            <div className="imgItem ">
              <FaPhotoVideo />
              <span className="name">Image/Video </span>
            </div>
            <div className="imgItem ">
              <FaCreativeCommonsRemix />
              <span className="name">Feeling/Activity</span>
            </div>
          </div>
        </div>
        <div className="createRoom">
          <div>Create Room</div>
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
          <Images image={img1} className="imgC" />
        </div>
        <div className="publicPosts">
          <div className="posts">
            <Images image={img1} className="imgP" />
            <div className="publicPost">
              <h4 className="nameHead">Routine Of Nepal Banda</h4>
              <span className="time">1h .</span>
              <FaGlobe className="time" />
            </div>
          </div>
          <p>
            Beautiful Night view of Kathmandu valley as seen from Single tree. ❤
            Pic. Binay Khatri
          </p>
          <Images image={img4} className="homePhoto" />
          <div className="CommentSection">
            <FaThumbsUp className="like" />
            <FaComment className="like" />
            <FaShare className="like" />
          </div>
        </div>
        <div className="publicPosts">
          <div className="posts">
            <Images image={img1} className="imgP" />
            <div className="publicPost">
              <h4 className="nameHead">Routine Of Nepal Banda</h4>
              <span className="time">1h .</span>
              <FaGlobe className="time" />
            </div>
          </div>
          <p>
            Beautiful Night view of Kathmandu valley as seen from Single tree. ❤
            Pic. Binay Khatri
          </p>
          <Images image={img4} className="homePhoto" />
          <div className="CommentSection">
            <FaThumbsUp className="like" />
            <FaComment className="like" />
            <FaShare className="like" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
