import React from "react";
import "./Programs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "GRAMMAR PROGRAMS",
    image: require("./images/1.jpg"),
  },
  {
    id: 2,
    name: "ART PROGRAMS",
    image: require("./images/2.jpg"),
  },
  {
    id: 3,
    name: "SOCIAL STUDIES",
    image: require("./images/3.jpg"),
  },
  {
    id: 4,
    name: "AFTERSCHOOL ACTIVITIES",
    image: require("./images/4.jpg"),
  },
  {
    id: 5,
    name: "AFTERSCHOOL ACTIVITIES",
    image: require("./images/5.jpg"),
  },
  {
    id: 6,
    name: "AFTERSCHOOL ACTIVITIES",
    image: require("./images/6.jpg"),
  },
];

function App() {
  return (
    <div className="background">
      <h2>SCHOOL PROGRAMS</h2>
      <div>
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((x, index) => (
            <SwiperSlide key={x.id}>
              <div
                className="swiper-contents"
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFC3A1" : "#A75D5D",
                }}
              >
                <div
                  className="title"
                  style={{
                    color: index % 2 === 0 ? "black" : "white",
                  }}
                >
                  {x.name}
                </div>
                <div className="slide-image">
                  <img src={x.image} alt="" />
                </div>
                <Link
                  to="/details"
                  className="details"
                  style={{
                    color: index % 2 === 0 ? "black" : "white",
                    borderColor: index % 2 === 0 ? "black" : "white",
                  }}
                >
                  Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
