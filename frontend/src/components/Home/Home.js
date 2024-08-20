import React from "react";
import Banner from "./Banner";
import Brands from "./Brands";
import WhoWeAre from "./WhoWeAre";
import BusinessSection from "./BusinessSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUsHeader from "./WhyChooseUsHeader";
import ContactSection from "./ContactSection";
import HorizontalScroll from "./HorizontalScroll";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <WhoWeAre />
      <WhyChooseUsHeader />
      <ServicesSection />
      <BusinessSection />
      <ContactSection />
      <Testimonial />
      {/* <HorizontalScroll /> */}
    </div>
  );
};

export default Home;
