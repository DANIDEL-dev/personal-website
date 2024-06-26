import React, { useState, useEffect } from "react";

const { PUBLIC_URL } = process.env;

const Intro = () => {
  var date = new Date();
  var hours = date.getHours();
  const [topImage, setTopImage] = useState("");
  const [bottomImage, setBottomImage] = useState("");

  useEffect(() => {
    if (hours >= 6 && hours <= 19) {
      setTopImage(`${PUBLIC_URL}/image/Daylight.png`);
      setBottomImage(`${PUBLIC_URL}/image/Daylight.png`);
    } else {
      setTopImage(`${PUBLIC_URL}/image/Night2.png`);
      setBottomImage(`${PUBLIC_URL}/image/Night.png`);
    }
  });

  return (
    <div>
      <div className="Top-container">
        <span className="ctimer2">
          <h2 className="time time2"> </h2>
          <h6 className="greeting greeting2"> </h6>
        </span>
        <div className="tcontainer">
          <img className="Top-cloud" src={topImage} alt="cloud-img" />
          <h1 className="name">I'm</h1>
          <h1 className="name">Daniel.</h1>
          <h2 className="name">a programmer.</h2>
          <img class="Bottom-cloud" src={bottomImage} alt="cloud-img" />
          <img
            className="mountain"
            src={`${PUBLIC_URL}/image/mountain.png`}
            alt="mountain-img"
          />
        </div>
      </div>
      <div className="middle-container">
        <div className="profile">
          <img
            className="my_pics"
            src={`${PUBLIC_URL}/image/me.jpg`}
            alt="Daniel"
            width="304"
            height="304"
          />
          <h2>Hello.</h2>
          <p className="intro-1 touch">
            I'm a software engineer, I believe every idea can be converted into
            reality.
          </p>
          <p className="intro-1 touch">
            I'm also a Physicist & automation engineer{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
