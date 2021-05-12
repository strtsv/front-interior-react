import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/slide-img-1.jpg";
import i2 from "../../assets/images/slide-img-2.jpg";
import i3 from "../../assets/images/slide-img-3.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-loop="true"
        data-autoplay={4500}
        data-simulate-touch="false"
        data-direction="horizontal"
      >
        <div className="swiper-wrapper text-center">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-xxl">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-xl-11 col-xxl-12">
                    <div
                      data-caption-animate="fadeInUp"
                      data-caption-delay={50}
                      data-caption-duration={900}
                    >
                      <svg
                        className="rotate-90 brand-big"
                        viewBox="0 0 694.66 694.66"
                      >
                        <g>
                          <polygon
                            points="347.33 555.73 555.73 555.73 555.73 486.26 486.26 486.26 486.26 416.79 416.79 416.79 416.79 486.26 347.33 486.26 347.33 416.79 277.86 416.79 277.86 486.26 277.86 625.19 69.47 625.19 69.47 555.73 208.4 555.73 208.4 486.26 69.47 486.26 69.47 347.33 138.93 347.33 138.93 416.79 208.4 416.79 208.4 277.86 138.93 277.86 69.47 277.86 69.47 69.47 208.4 69.47 208.4 0 69.47 0 0 0 0 694.66 69.47 694.66 416.79 694.66 416.79 625.19 347.33 625.19 347.33 555.73"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="625.19 0 277.86 0 277.86 69.47 625.19 69.47 625.19 625.19 486.26 625.19 486.26 694.66 625.19 694.66 694.66 694.66 694.66 0 625.19 0"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="347.33 138.93 277.86 138.93 277.86 347.33 347.33 347.33 347.33 208.4 555.72 208.4 555.72 138.93 347.33 138.93 347.33 138.93"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <rect
                            x="416.79"
                            y="277.86"
                            width="208.4"
                            height="69.47"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="208.4 138.93 138.93 138.93 138.93 208.4 208.4 208.4 208.4 208.4 277.86 208.4 277.86 138.93 208.4 138.93 208.4 138.93"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                        </g>
                      </svg>
                    </div>
                    <h1
                      className="text-uppercase"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                      data-caption-duration={900}
                    >
                      Welcome to Prestige
                    </h1>
                    <div className="block-lg block-center offset-top-4">
                      <p
                        className="medium"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={250}
                        data-caption-duration={900}
                      >
                        Our interior design studio delivers unique projects for
                        your home and office interiors while taking your
                        personal preferences into account.
                      </p>
                    </div>
                    <a
                      className="button button-white button-lg offset-top-3"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                      data-caption-duration={900}
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i2}
            style={{
              backgroundImage: "url(" + i2 + ")",
            }}
          >
            <div className="swiper-slide-caption section-xxl">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-xl-11 col-xxl-12">
                    <div
                      data-caption-animate="fadeInUp"
                      data-caption-delay={50}
                      data-caption-duration={900}
                    >
                      <svg
                        className="rotate-90 brand-big"
                        viewBox="0 0 694.66 694.66"
                      >
                        <g>
                          <polygon
                            points="347.33 555.73 555.73 555.73 555.73 486.26 486.26 486.26 486.26 416.79 416.79 416.79 416.79 486.26 347.33 486.26 347.33 416.79 277.86 416.79 277.86 486.26 277.86 625.19 69.47 625.19 69.47 555.73 208.4 555.73 208.4 486.26 69.47 486.26 69.47 347.33 138.93 347.33 138.93 416.79 208.4 416.79 208.4 277.86 138.93 277.86 69.47 277.86 69.47 69.47 208.4 69.47 208.4 0 69.47 0 0 0 0 694.66 69.47 694.66 416.79 694.66 416.79 625.19 347.33 625.19 347.33 555.73"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="625.19 0 277.86 0 277.86 69.47 625.19 69.47 625.19 625.19 486.26 625.19 486.26 694.66 625.19 694.66 694.66 694.66 694.66 0 625.19 0"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="347.33 138.93 277.86 138.93 277.86 347.33 347.33 347.33 347.33 208.4 555.72 208.4 555.72 138.93 347.33 138.93 347.33 138.93"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <rect
                            x="416.79"
                            y="277.86"
                            width="208.4"
                            height="69.47"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="208.4 138.93 138.93 138.93 138.93 208.4 208.4 208.4 208.4 208.4 277.86 208.4 277.86 138.93 208.4 138.93 208.4 138.93"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                        </g>
                      </svg>
                    </div>
                    <h1
                      className="text-uppercase"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                      data-caption-duration={900}
                    >
                      Spectacular Interior
                    </h1>
                    <div className="block-lg block-center offset-top-4">
                      <p
                        className="medium"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={250}
                        data-caption-duration={900}
                      >
                        Each project delivered by our team is 100% original,
                        unique, and spectacular. We aim to create smart spaces
                        and authentic emotive experiences.
                      </p>
                    </div>
                    <a
                      className="button button-white button-lg offset-top-3"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                      data-caption-duration={900}
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i3}
            style={{
              backgroundImage: "url(" + i3 + ")",
            }}
          >
            <div className="swiper-slide-caption section-xxl">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-xl-11 col-xxl-12">
                    <div
                      data-caption-animate="fadeInUp"
                      data-caption-delay={50}
                      data-caption-duration={900}
                    >
                      <svg
                        className="rotate-90 brand-big"
                        viewBox="0 0 694.66 694.66"
                      >
                        <g>
                          <polygon
                            points="347.33 555.73 555.73 555.73 555.73 486.26 486.26 486.26 486.26 416.79 416.79 416.79 416.79 486.26 347.33 486.26 347.33 416.79 277.86 416.79 277.86 486.26 277.86 625.19 69.47 625.19 69.47 555.73 208.4 555.73 208.4 486.26 69.47 486.26 69.47 347.33 138.93 347.33 138.93 416.79 208.4 416.79 208.4 277.86 138.93 277.86 69.47 277.86 69.47 69.47 208.4 69.47 208.4 0 69.47 0 0 0 0 694.66 69.47 694.66 416.79 694.66 416.79 625.19 347.33 625.19 347.33 555.73"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="625.19 0 277.86 0 277.86 69.47 625.19 69.47 625.19 625.19 486.26 625.19 486.26 694.66 625.19 694.66 694.66 694.66 694.66 0 625.19 0"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="347.33 138.93 277.86 138.93 277.86 347.33 347.33 347.33 347.33 208.4 555.72 208.4 555.72 138.93 347.33 138.93 347.33 138.93"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <rect
                            x="416.79"
                            y="277.86"
                            width="208.4"
                            height="69.47"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                          <polygon
                            points="208.4 138.93 138.93 138.93 138.93 208.4 208.4 208.4 208.4 208.4 277.86 208.4 277.86 138.93 208.4 138.93 208.4 138.93"
                            style={{
                              fill: "#e4c055",
                            }}
                          />
                        </g>
                      </svg>
                    </div>
                    <h1
                      className="text-uppercase"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                      data-caption-duration={900}
                    >
                      First-class Designers
                    </h1>
                    <div className="block-lg block-center offset-top-4">
                      <p
                        className="medium"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={250}
                        data-caption-duration={900}
                      >
                        Our team is comprised of the best and the most
                        experienced interior designers who know how to transform
                        every inch of your home interior.
                      </p>
                    </div>
                    <a
                      className="button button-white button-lg offset-top-3"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                      data-caption-duration={900}
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
        {}
        <div className="swiper-button-prev">
          <svg viewBox="0 0 62.2 116" width={16} height={30}>
            <g>
              <path d="M55.2,114.8a4.1,4.1,0,0,0,5.8,0,4.1,4.1,0,0,0,0-5.8L10,58,61,7a4.1,4.1,0,0,0-5.8-5.8L1.2,55.1a4.1,4.1,0,0,0,0,5.8Z" />
            </g>
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg viewBox="0 0 62.1 116" width={16} height={30}>
            <g>
              <path d="M7,114.8A4,4,0,0,1,4.1,116a4,4,0,0,1-2.9-1.2,4.1,4.1,0,0,1,0-5.8l51-51L1.2,7A4.1,4.1,0,0,1,7,1.2L60.9,55.1a4.1,4.1,0,0,1,0,5.8Z" />
            </g>
          </svg>
        </div>
      </section>
    );
  }
}

export default Slider;
