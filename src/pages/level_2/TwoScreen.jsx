import React from "react";
import EggScreen from "../../components/EggScreen";

// 이미지 파일을 각각 변수에 저장합니다.
const image1 = require("../level_2/assets/1.jpg");
const image2 = require("../level_2/assets/2.jpg");
const image3 = require("../level_2/assets/3.jpg");
const image4 = require("../level_2/assets/4.jpg");
const image5 = require("../level_2/assets/5.jpg");
const image6 = require("../level_2/assets/6.jpg");

const TwoScreen = () => {
  const eggImage = require("../level_2/level_2_egg.png");

  // 이미지들을 배열에 담습니다.
  const images = [image1, image2, image3, image4, image5, image6];

  // 이미지 배열에서 무작위로 하나의 이미지를 선택합니다.
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <EggScreen
      eggImage={eggImage}
      randomImage={image1} // 선택된 이미지를 프롭스로 전달
      eggImageSize={{ width: "70%", height: "40%" }}
      breakPoint={10}
    />
  );
};

export default TwoScreen;
