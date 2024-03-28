import React from "react";
import "./styles/HomeVideo.css";
import Home from "./Home";

const HomeVideo = () => {
  return (
    <div className="home__slider">
      <div className="home__videoPlay">
        <video className="video__background" autoPlay playsInline loop muted>
          <source
            src="https://we-are-sigma.s3.amazonaws.com/media/video/home_7KWl8WI.mp4"
            type="video/mp4"
          />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default HomeVideo;
