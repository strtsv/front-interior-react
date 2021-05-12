import React from "react";

import i1 from "../../assets/images/icon-classic-1-99x99.png";
import i2 from "../../assets/images/icon-classic-2-111x99.png";
import i3 from "../../assets/images/icon-classic-3-99x99.png";
import i4 from "../../assets/images/icon-classic-4-110x99.png";

class Services extends React.Component {
  render() {
    return (
      <section className="section section-inset-2 bg-default text-center">
        <div className="container">
          <p
            className="text-divided text-divided-1 small wow fadeInLeft"
            data-wow-delay=".3s"
          >
            What We Offer
          </p>
          <h2 className="wow fadeInUp" data-wow-delay=".5s">
            Our Services
          </h2>
          <div className="row row-40">
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="box-icon">
                <img src={i1} alt width={99} height={99} />
                <div className="box-icon-divider" />
                <h4 className="box-icon-title">
                  <a href="#">Project Analysis & Project Design</a>
                </h4>
                <p className="box-icon-text">
                  These services involve creating project layouts according to
                  site space, budget, and visions of the client.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="box-icon">
                <img src={i2} alt width={111} height={99} />
                <div className="box-icon-divider" />
                <h4 className="box-icon-title">
                  <a href="#">Furniture Design & Manufacture</a>
                </h4>
                <p className="box-icon-text">
                  Perfect furniture that fits the style of a room/building makes
                  or breaks the whole interior designing game.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="box-icon">
                <img src={i3} alt width={99} height={99} />
                <div className="box-icon-divider" />
                <h4 className="box-icon-title">
                  <a href="#">Design Consulting Services</a>
                </h4>
                <p className="box-icon-text">
                  Our design consultancy team helps you bring together the type
                  of design that suits your home’s interior.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="box-icon">
                <img src={i4} alt width={110} height={99} />
                <div className="box-icon-divider" />
                <h4 className="box-icon-title">
                  <a href="#">Remodeling & Home Advising Solutions</a>
                </h4>
                <p className="box-icon-text">
                  For remodeling purposes, we work closely on the details given
                  in the existing space layouts.
                </p>
              </div>
            </div>
          </div>
          <a
            className="button button-lg button-gray-800 wow fadeInUp"
            data-wow-delay=".7s"
            href="services.html"
          >
            Learn More
          </a>
        </div>
      </section>
    );
  }
}

export default Services;
