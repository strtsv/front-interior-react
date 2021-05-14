import React from "react";

import Header from "../components/Blog/Header";
import Breadcrumbs from "../components/Blog/Breadcrumbs";
import News from "../components/Blog/News";
import Contacts from "../components/Blog/Contacts";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <News />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Blog;
