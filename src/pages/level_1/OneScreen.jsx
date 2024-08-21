import React from "react";
import EggScreen from "../../components/EggScreen";

const OneScreen = () => {
  const eggImage = require("./level_1_egg.png");
  const randomImages = [
    require("./assets/1.jpg"),
    require("./assets/2.jpg"),
    require("./assets/3.jpg"),
  ];

  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)];

  return (
    <EggScreen
      eggImage={eggImage}
      randomImage={randomImage}
      eggImageSize={{ width: "50%", height: "30%" }}
      breakPoint={10}
    />
  );
};

export default OneScreen;
