import React from "react";

class ContactUs extends React.Component {
  render() {
    return (
      <section className="section bg-default">
        <div className="row no-gutters">
          <div className="col-xl-6">
            <div className="section-half-content section-half-content-2 section-half-content-right section-inset-3 section-left">
              <p
                className="text-divided small wow fadeInUp"
                data-wow-delay=".1s"
              >
                Get in Touch
              </p>
              <div className="inset-left-1">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  CONTACT US
                </h2>
                {}
                <form
                  className="rd-mailform rd-form-1 text-left wow fadeInUp"
                  data-wow-delay=".5s"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="row row-narrow row-15">
                    <div className="col-xl-6">
                      <div className="form-wrap">
                        <label
                          className="form-label form-label-outside"
                          htmlFor="contact-name"
                        >
                          Your Name
                        </label>
                        <input
                          className="form-input"
                          id="contact-name"
                          type="text"
                          name="name"
                          data-constraints="@Required"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-wrap">
                        <label
                          className="form-label form-label-outside"
                          htmlFor="contact-email"
                        >
                          Your Email
                        </label>
                        <input
                          className="form-input"
                          id="contact-email"
                          type="email"
                          name="email"
                          data-constraints="@Required @Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-wrap">
                        <label
                          className="form-label form-label-outside"
                          htmlFor="contact-message"
                        >
                          Your Message
                        </label>
                        <textarea
                          className="form-input"
                          id="contact-message"
                          name="message"
                          data-constraints="@Required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-button group-sm text-center text-lg-left">
                        <button
                          className="button button-lg button-gray-800"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            {}
            {}
            {}
            <div
              className="google-map-container google-map-fullheight"
              data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
              data-zoom={5}
              data-icon="images/gmap_marker.png"
              data-icon-active="images/gmap_marker_active.png"
              data-styles="[]"
            >
              <div className="google-map" />
              <ul className="google-map-markers">
                <li
                  data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                  data-description="9870 St Vincent Place, Glasgow"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
