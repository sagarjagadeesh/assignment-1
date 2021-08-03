import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./task2.scss";
import ReactPlayer from "react-player";

class index extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div className="carousel-bg carousel-bg-1 adjust-text">
            <h2 contentEditable role="textbox" aria-multiline="true">
              Good, better, best. Never let it rest. 'Til your good is better
              and your better is best.
            </h2>
          </div>
          <div className="carousel-bg carousel-bg-2">
            <h2 contentEditable role="textbox" aria-multiline="true">
              When something is important enough, you do it even if the odds are
              not in your favor.
            </h2>
          </div>
        </Carousel>

        <div className="react-player-cont">
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </div>
      </div>
    );
  }
}

export default index;
