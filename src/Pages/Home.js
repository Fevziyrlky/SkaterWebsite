import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import Brands from "components/Brands";
import Blogs from "components/Blogs";
import Contact from "./Contact";
import Cards from "components/Cards";

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div>
      <div className="relative  md:h-[600px] ">
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[600px] object-cover"
              src={require("assets/background-flipped.jpg")}
            />
          </div>
          <div>
            <img
              className="w-full h-[600px] object-cover"
              src={require("assets/background-sunset.jpg")}
            />
          </div>
          <div>
            <img
              className="w-full h-[600px] object-cover"
              src={require("assets/background-img.jpg")}
              alt="skate1"
            />
          </div>
          <div>
            <img
              className="w-full h-[600px] object-cover"
              src={require("assets/background-img1.jpg")}
            />
          </div>
        </Slider>
        <div className="absolute h-[600px] inset-0 flex items-center  justify-center z-10">
          <h3 className="md:text-5xl sm:text-4xl lg:text-6xl font-semibold text-white text-center">
            The Biggest
            <br /> Skaters Website
            <br />
          </h3>
        </div>
      </div>

      <Brands />

      <Blogs />

      <Cards />
    </div>
  );
}
