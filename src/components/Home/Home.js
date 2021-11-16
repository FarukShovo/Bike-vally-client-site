import React from "react";

import Gallery from "../Gallery/Gallery";
import Products from "../Products/Products";
import DisplayReview from "../Review/DisplayReview";

import Speciality from "../Speciality/Speciality";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {" "}
      <section className="about" id="about">
        <div className="row">
          <div className="image">
            <img src="https://storage.googleapis.com/kormo_business_icons/employer-98b9a7b5-246d-48d3-ba93-179659c9f715/logo.png?$v=1617338782629" alt="" />
          </div>

          <div className="content">
            <h3>Speed is life && Life is Speed</h3>
            <p>
              We try to fullfill your hobby of speed. We always try to make you happy! Stay with us and support us we will change your life with speed!!!!
            </p>
            <p>We will serve you with your own choice onwards...............!!!!</p>
          </div>
        </div>
      </section>
      <Products></Products>
      <Speciality></Speciality>
      <Gallery></Gallery>
      <DisplayReview></DisplayReview>
    </div>
  );
};

export default Home;
