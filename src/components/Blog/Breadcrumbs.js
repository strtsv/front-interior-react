import React from "react";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section className="breadcrumbs-custom bg-image">
        <div className="container">
          <h2 className="breadcrumbs-custom-title">Blog</h2>
          <ul className="breadcrumbs-custom-path">
            <li>
              <a className="link-gray-500" href="index.html">
                Home
              </a>
            </li>
            <li className="active">Blog</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
