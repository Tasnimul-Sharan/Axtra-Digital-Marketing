import React from "react";
import Banner from "./Banner";
import Brands from "./Brands";
import WhoWeAre from "./WhoWeAre";
import BusinessSection from "./BusinessSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUsHeader from "./WhyChooseUsHeader";
import ContactSection from "./ContactSection";
import Testimonial from "./Testimonial";
import FeaturedWork from "./FeaturedWork";
import PricingTable from "./PricingTable";
import BlogSection from "./BlogSection";
import HorizontalScroll from "./HorizontalScroll/HorizontalScroll";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <WhoWeAre />
      <FeaturedWork />
      <Testimonial />
      {/* <HorizontalScroll /> */}
      <section className="horizontal-scroll-wrapper">
        <HorizontalScroll />
      </section>

      <PricingTable />
      <BlogSection />
    </div>
  );
};

export default Home;
