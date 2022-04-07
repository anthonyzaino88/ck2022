import React from "react";
import { InfoSection } from "../../Components";
import Products from "../../Components/Products/Products";
import ImageSlider from "../../Components/Slider/ImageSlider";
import { SliderData } from "../../Components/Slider/SliderData";

import { homeObjOne, homeObjShop, homeObjTwo } from "./Data";

const Home = () => (
  <>
    <InfoSection {...homeObjOne} />
    <ImageSlider slides={SliderData} />
    <InfoSection {...homeObjTwo} />
    <Products {...homeObjShop} />
  </>
);

export default Home;
