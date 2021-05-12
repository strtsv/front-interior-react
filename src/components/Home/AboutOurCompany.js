import React from "react";

import i from "../../assets/images/img-half-1-960x990.jpg";

class AboutOurCompany extends React.Component {
  render() {
    return (
      <section className="section bg-gray-100 section-half">
        <div className="row no-gutters">
          <div className="col-xl-6 position-static">
            <img
              className="img-half-1 img-half-left"
              src={i}
              alt
              width={960}
              height={990}
            />
          </div>
          <div className="col-xl-6">
            <div className="section-half-content section-half-content-right section-inset-3">
              <p
                className="text-divided small wow fadeInLeft"
                data-wow-delay=".1s"
              >
                Turn Your Home/Office Into Your Space
              </p>
              <div className="inset-left-1">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  About Our Company
                </h2>
                <p className="big wow fadeInUp" data-wow-delay=".5s">
                  “Your living space is where the heart is”, we make the full
                  utilization of our experience of creating spectacular living
                  space and put our whole dedication into it. We bring together
                  the client’s taste, style, comfort, and fashion in the best
                  way. Rest assured that your project will look and feel as
                  spectacular as you want it.
                </p>
                <a
                  className="button button-lg button-dark-outline wow fadeInUp"
                  data-wow-delay=".5s"
                  href="about-us.html"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutOurCompany;
