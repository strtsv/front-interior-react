import React from "react";

import i1 from "../../assets/images/logo-default-334x90.png";
import i2 from "../../assets/images/logo-inverse-334x90.png";

class Contacts extends React.Component {
  render() {
    return (
      <section className="section section-inset-6 bg-default text-center text-sm-left">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-10 col-lg-3">
              {}
              <a className="brand" href="index.html">
                <img
                  className="brand-logo-dark"
                  src={i1}
                  alt
                  width={167}
                  height={45}
                />
                <img
                  className="brand-logo-light"
                  src={i2}
                  alt
                  width={167}
                  height={45}
                />
              </a>
              <p className="offset-top-2">
                {" "}
                We are a team of professional and passionate interior designers
                and architects creating unique spaces.
              </p>
            </div>
            <div className="col-md-10 col-lg-3">
              <h4 className="offset-top-1">Contacts</h4>
              <p>
                8901 Marmora Road, <br className="d-none d-xl-block" /> Glasgow,
                D04 89GR.
              </p>
              <div className="unit unit-spacing-xs justify-content-center justify-content-sm-start">
                <div className="unit-left">Freephone:</div>
                <div className="unit-body">
                  <a className="link-gray-300" href="tel:#">
                    +1 800 559 6580​​​​​​​
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-5">
              <h4 className="offset-top-1">Newsletter</h4>
              <form
                className="rd-form rd-mailform rd-form-inline rd-form-inline-2"
                data-form-output="form-output-global"
                data-form-type="subscribe"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="subscribe-form-emai-footer"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label
                    className="form-label"
                    htmlFor="subscribe-form-emai-footer"
                  >
                    Enter Your Email
                  </label>
                </div>
                <div className="form-button">
                  <button
                    className="button button-md button-gray-800"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
