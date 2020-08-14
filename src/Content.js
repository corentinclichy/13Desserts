import React from "react";
import "./Content.css";
import photo1 from "./13Desserts_all4.jpg";

function Content() {
  return (
    <div className="contents">
      <div className="contents__banner">
        <div className="contents__banner__texts">
          <h1 className="contents__banner_text">EXPO.01</h1>
          <p className="contents__banner_text"> 10.07.2020 - 05.09.2020</p>
        </div>

        <img src={photo1} alt="" className="banner__img" />
      </div>
    </div>
  );
}

export default Content;
