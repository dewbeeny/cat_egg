import React from "react";
import EggScreen from "../../components/EggScreen";

const image1 = require("../level_3/assets/1.jpg");
const image2 = require("../level_3/assets/2.jpg");
const image3 = require("../level_3/assets/3.jpg");
const image4 = require("../level_3/assets/4.jpg");
const image5 = require("../level_3/assets/5.jpg");
const image6 = require("../level_3/assets/6.jpg");

const THreeScreen = () => {
  const eggImage = require("../level_3/level_3_egg.png");

  const images = [image1, image2, image3, image4, image5, image6];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <EggScreen
      eggImage={eggImage}
      randomImage={randomImage}
      eggImageSize={{ width: "90%", height: "60%" }}
      breakPoint={70}
    />
  );
};

export default THreeScreen;
