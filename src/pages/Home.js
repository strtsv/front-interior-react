import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services";
import AboutOurCompany from "../components/Home/AboutOurCompany";
import ContactUs from "../components/Home/ContactUs";
import Testimonials from "../components/Home/Testimonials";
import Contacts from "../components/Home/Contacts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <AboutUs />
      <Services />
      <AboutOurCompany />
      <ContactUs />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
