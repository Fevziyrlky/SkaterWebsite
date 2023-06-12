import React from "react";
import Slider from "react-slick";
import santaCruz from "assets/santa-cruz-skateboards.jpg";
import realSkate from "assets/real-skateboards.jpg";
import powellPeralta from "assets/powell-peralta.jpg";
import bakerSkate from "assets/baker-skateboards.jpg";
import polarSkate from "assets/polar-skate-co.jpg";
import dcShoes from "assets/dc-shoes.jpg";
import quasiSkate from "assets/quasi-skateboards.jpg";
import toyMachine from "assets/toy-machine.jpg";

export default function Brands() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto my-auto w-full mt-3 md:p-6">
      <Slider className="w-full md:grid-cols-3 lg:grid-cols-4" {...settings}>
        <a
          href="https://santacruzskateboards.com/"
          title="Santa Cruz"
          className="h-[100px]  block object-cover"
        >
          <img className="h-[100px] mx-auto object-contain" src={santaCruz} />
        </a>
        <a
          href="https://polarskateco.com/"
          title=""
          className="h-[100px] object-cover"
        >
          <img className="h-[100px] mx-auto object-contain" src={polarSkate} />
        </a>
        <a
          href="https://www.realskateboards.com/"
          title=""
          className="md:h-[100px] object-cover"
        >
          <img className="h-[100px] mx-auto object-contain" src={realSkate} />
        </a>
        <a
          href="https://powell-peralta.com/"
          title=""
          className="h-[100px] object-cover"
        >
          <img
            className="h-[100px] mx-auto object-contain"
            src={powellPeralta}
          />
        </a>
        <a
          href="https://bakerskateboards.com/"
          title=""
          className="h-[100px] object-cover"
        >
          <img className="h-[100px] mx-auto object-contain" src={bakerSkate} />
        </a>
        <a
          href="https://www.dcshoes.com/"
          title=""
          className="h-[100px] object-cover"
        >
          <img
            className="rounded-lg h-[100px] mx-auto object-contain"
            src={dcShoes}
          />
        </a>
        <a
          href="https://quasiskateboards.com/"
          title=""
          className="h-[100px] object-cover"
        >
          <img className="h-[100px] mx-auto object-contain" src={quasiSkate} />
        </a>
        <a
          href="https://toymachine.com/"
          title=""
          className="h-[100px] object-cover"
        >
          <img className="h-[100px] mx-auto object-contain" src={toyMachine} />
        </a>
      </Slider>
    </div>
  );
}
