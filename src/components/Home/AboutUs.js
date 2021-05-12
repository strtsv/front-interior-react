import React from "react";

import i1 from "../../assets/images/gallery-massonry-2-455x930.jpg";
import i2 from "../../assets/images/gallery-massonry-4-455x455.jpg";
import i3 from "../../assets/images/gallery-massonry-1-930x930.jpg";
import i4 from "../../assets/images/gallery-massonry-3-455x455.jpg";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section position-relative">
        <div className="box-bg-decorate box-bg-decorate-1 bg-gray-100" />
        <div className="section-inset-11 text-center text-lg-left">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <p
                  className="text-divided small wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  A Few Words About Us
                </p>
                <div className="inset-left-2">
                  <h2 className="wow fadeInUp" data-wow-delay=".5s">
                    Quality Interior Design
                  </h2>
                  <div
                    className="block-md block-center block-lg-left medium wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <p>
                      Prestige is an award-winning architecture and interior
                      design practice based in NYC. It works internationally on
                      projects of residential interior design as well as
                      commercial ones including boutique hotels and restaurants.
                      We represent a philosophy of mindful and distinctive
                      design.
                    </p>
                  </div>
                  <a
                    className="button button-lg button-gray-800 wow fadeInUp"
                    data-wow-delay=".7s"
                    href="contact-us.html"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-wide container-20 isotope-wrap">
          <div
            className="row row-narrow row-20 justify-content-center isotope"
            data-isotope-layout="masonry"
            data-lightgallery="group"
            data-lg-animation="lg-slide-circular"
          >
            <div className="col-lg-3 isotope-item">
              <div className="thumbnail-classic">
                <a
                  className="thumbnail-classic-link"
                  href="images/gallery-massonry-2-original.jpg"
                  data-lightgallery="item"
                >
                  <img
                    className="thumbnail-classic-img"
                    src={i1}
                    alt
                    width={455}
                    height={930}
                  />
                </a>
                <div className="thumbnail-classic-caption">
                  <p className="thumbnail-classic-meta">Furniture Design</p>
                  <h4 className="thumbnail-classic-title">
                    <a className="thumbnail-classic-title-link" href="#">
                      349 Myers Dr.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 isotope-item">
              <div className="thumbnail-classic">
                <a
                  className="thumbnail-classic-link"
                  href="images/gallery-massonry-4-original.jpg"
                  data-lightgallery="item"
                >
                  <img
                    className="thumbnail-classic-img"
                    src={i2}
                    alt
                    width={455}
                    height={455}
                  />
                </a>
                <div className="thumbnail-classic-caption">
                  <p className="thumbnail-classic-meta">Interior Design</p>
                  <h4 className="thumbnail-classic-title">
                    <a className="thumbnail-classic-title-link" href="#">
                      891 Old Victoria St.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 isotope-item">
              <div className="thumbnail-classic">
                <a
                  className="thumbnail-classic-link"
                  href="images/gallery-massonry-1-original.jpg"
                  data-lightgallery="item"
                >
                  <img
                    className="thumbnail-classic-img"
                    src={i3}
                    alt
                    width={930}
                    height={930}
                  />
                </a>
                <div className="thumbnail-classic-caption">
                  <p className="thumbnail-classic-meta">Lighting Design</p>
                  <h4 className="thumbnail-classic-title">
                    <a className="thumbnail-classic-title-link" href="#">
                      8948 Pearl Ln.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 isotope-item">
              <div className="thumbnail-classic">
                <a
                  className="thumbnail-classic-link"
                  href="images/gallery-massonry-3-original.jpg"
                  data-lightgallery="item"
                >
                  <img
                    className="thumbnail-classic-img"
                    src={i4}
                    alt
                    width={455}
                    height={455}
                  />
                </a>
                <div className="thumbnail-classic-caption">
                  <p className="thumbnail-classic-meta">Design consulting</p>
                  <h4 className="thumbnail-classic-title">
                    <a className="thumbnail-classic-title-link" href="#">
                      477 North Greenrose Dr.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section-inset-12 text-center text-lg-left">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              <div className="inset-right-5">
                <p className="medium wow fadeInUp" data-wow-delay=".3s">
                  Take a look at our latest and featured projects in our
                  portfolio. From exclusive residential to unique commercial
                  interiors, we have a variety of projects that will certainly
                  impress you.
                </p>
                <a
                  className="button button-lg button-dark-outline wow fadeInUp"
                  data-wow-delay=".4s"
                  href="gallery.html"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
