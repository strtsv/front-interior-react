import React from "react";

import Header from "../components/SinglePost/Header";
import Breadcrumbs from "../components/SinglePost/Breadcrumbs";
import Discover from "../components/SinglePost/Discover";
import Contacts from "../components/SinglePost/Contacts";
import Footer from "../components/Footer";

const SinglePost = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Discover />
      <Contacts />
      <Footer />
    </div>
  );
};

export default SinglePost;
