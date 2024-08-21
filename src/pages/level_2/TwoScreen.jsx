import React from "react";
import EggScreen from "../../components/EggScreen";

const image1 = require("../level_2/assets/1.jpg");
const image2 = require("../level_2/assets/2.jpg");
const image3 = require("../level_2/assets/3.jpg");
const image4 = require("../level_2/assets/4.jpg");
const image5 = require("../level_2/assets/5.jpg");
const image6 = require("../level_2/assets/6.jpg");

const TwoScreen = () => {
  const eggImage = require("../level_2/level_2_egg.png");

  const images = [image1, image2, image3, image4, image5, image6];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <EggScreen
      eggImage={eggImage}
      randomImage={randomImage}
      eggImageSize={{ width: "70%", height: "40%" }}
      breakPoint={30}
    />
  );
};

export default TwoScreen;
