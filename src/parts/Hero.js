import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center text-center text-md-left">
        <div className="col-auto pr-lg-5 mb-5 mb-md-0" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-0 w-md-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row justify-content-center justify-content-md-start mt-5">
            <div className="col-auto mr-lg-5">
              <img
                width="36"
                height="36"
                src={`${process.env.PUBLIC_URL}/images/icon-traveler.svg`}
                alt={`${props.data.traveler} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.traveler)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto mr-lg-5">
              <img
                width="36"
                height="36"
                src={`${process.env.PUBLIC_URL}/images/icon-treasure.svg`}
                alt={`${props.data.treasure} Treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasure)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={`${process.env.PUBLIC_URL}/images/icon-cities.svg`}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 pl-lg-5">
          <div classname="hero-image-placeholder">
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid image-hero position-relative"
              style={{ zIndex: 2 }}
            />
            <img
              src={ImageHero_}
              alt="Room with couches frame"
              className="img-fluid frame-hero position-relative"
              style={{ margin: "-400px 0 0 15px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
