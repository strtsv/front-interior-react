import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic text-center text-sm-left">
        <div className="container border-custom">
          <p className="rights">
            <span>© </span>
            <span className="copyright-year" />
            <span> </span>
            <span>Prestige</span>
            <span>. </span>
            <span>All Rights Reserved</span>
            <span>. </span>
            <a href="privacy-policy.html">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
