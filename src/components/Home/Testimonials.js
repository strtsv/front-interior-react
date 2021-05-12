import React from "react";

import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

import i1 from "../../assets/images/testimonials-1-300x300.jpg";
import i2 from "../../assets/images/testimonials-2-300x300.jpg";
import i3 from "../../assets/images/testimonials-3-300x300.jpg";

const options = {
  loop: true,
  autoplay: false,
  dots: true,
  nav: false,
  items: 1,
};

class Testimonials extends React.Component {
  render() {
    return (
      <section className="section bg-gray-100 section-inset-5 text-center text-lg-left">
        <div className="container">
          <div
            className="owl-carousel-1"
            // className="owl-carousel owl-carousel-1"
            data-items={1}
            data-dots="true"
            data-autoplay="true"
            data-animation-in="fadeIn"
            data-animation-out="fadeOut"
          >
            <OwlCarousel {...options}>
              <div className="item">
                <div className="row row-30 align-items-center">
                  <div className="col-lg-3">
                    <img
                      className="img-circle"
                      src={i1}
                      alt
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="col-lg-9">
                    <div className="inset-right-1 inset-left-2">
                      <h3>Elizabeth Johnson</h3>
                      <p className="small">client</p>
                      <p className="big font-weight-bold">
                        I chose Prestige because of their superior range of
                        design capabilities and their insightful advice during
                        pre-construction planning. Their knowledge, experience,
                        and attention to detail have proven invaluable to me in
                        creating a superior finished project, which attracts
                        more visitors to my restaurant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row row-30 align-items-center">
                  <div className="col-lg-3">
                    <img
                      className="img-circle"
                      src={i2}
                      alt
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="col-lg-9">
                    <div className="inset-right-1 inset-left-2">
                      <h3>Emma Anderson</h3>
                      <p className="small">client</p>
                      <p className="big font-weight-bold">
                        Prestige was highly recommended to me. The sensitivity,
                        knowledge, vision and ultimate execution this firm
                        brought to the table was tremendous. The renovation of
                        my home could not be the success it has become without
                        their involvement and the professionalism of their team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row row-30 align-items-center">
                  <div className="col-lg-3">
                    <img
                      className="img-circle"
                      src={i3}
                      alt
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="col-lg-9">
                    <div className="inset-right-1 inset-left-2">
                      <h3>Peter Williams</h3>
                      <p className="small">client</p>
                      <p className="big font-weight-bold">
                        This team’s professional guidance gave me results that
                        far exceeded my expectations. My clients thoroughly
                        enjoy the fun, relaxing ambience that the interior
                        design creates. Their amazement began at the opening and
                        haven’t ceased yet. Thank you for your super job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
