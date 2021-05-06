import React from "react";
import $ from "jquery";
import { WOW } from "wowjs";

import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";

import i1 from "../assets/images/logo-default-334x90.png";
import i2 from "../assets/images/logo-inverse-334x90.png";

class Header extends React.Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });
    wow.init();
    $().UItoTop({
      easingType: "easeOutQuad",
      containerClass: "ui-to-top fa fa-angle-up",
    });
    $(".rd-navbar").TMStickUp({});
  }
  render() {
    return (
      <header className="section page-header context-dark">
        {}
        <div className="rd-navbar-wrap rd-navbar-wrap-mod-1">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-aside-outer">
              <div className="rd-navbar-aside">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
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
                  </div>
                  <ul className="list-inline list-inline-md rd-navbar-list-desktop">
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-instagram"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-facebook-f"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-pinterest-p"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about-us.html">
                          About Us
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="services.html">
                          Services
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="single-service.html"
                            >
                              Single Service
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Pages
                        </a>
                        <ul className="rd-menu rd-navbar-megamenu">
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">
                              <a href="#">Pages 1</a>
                            </h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="grid-system.html"
                                >
                                  Grid system
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="privacy-policy.html"
                                >
                                  Privacy policy
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="our-team.html"
                                >
                                  Our Team
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="team-member.html"
                                >
                                  Team Member
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="testimonials.html"
                                >
                                  Testimonials
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="pricing-tables.html"
                                >
                                  Pricing Tables
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">
                              <a href="#">Pages 2</a>
                            </h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="forms.html"
                                >
                                  Forms
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tabs-and-accordions.html"
                                >
                                  Tabs and accordions
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="progress-bars.html"
                                >
                                  Progress bars
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tables.html"
                                >
                                  Tables
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">
                              <a href="#">Pages 3</a>
                            </h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="under-construction.html"
                                >
                                  Under Construction
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="404.html"
                                >
                                  404
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="503.html"
                                >
                                  503
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="search-results.html"
                                >
                                  Search results
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="faq.html"
                                >
                                  FAQ
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="blog.html">
                          Blog
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="single-post.html"
                            >
                              Single Post
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rd-navbar-collapse rd-navbar-phone-wrap">
                  <div className="rd-navbar-phone">
                    <span>Call Us:</span>
                    <a className="link-white" href="tel:#">
                      1 800 777 5555
                    </a>
                  </div>
                  <ul className="list-inline list-inline-md rd-navbar-list-mobile">
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-instagram"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-facebook-f"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-twitter"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm novi-icon link-white text-middle fa-pinterest-p"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
