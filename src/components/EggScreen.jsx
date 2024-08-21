import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  StyleSheet,
} from "react-native";
import useShakeAnimation from "../hooks/useShakeAnimation";

const EggScreen = ({ breakPoint, eggImage, randomImage, eggImageSize }) => {
  console.log(randomImage);

  const [shakeStyle, startShake] = useShakeAnimation();
  const [count, setCount] = useState(0);
  const [isImageShown, setIsImageShown] = useState(false);

  const onPress = () => {
    if (count < breakPoint) {
      setCount(count + 1);
      startShake();
    } else {
      setCount(count + 1);
      setIsImageShown(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={styles.container}>
        {count < breakPoint ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[styles.imageContainer, eggImageSize]}
            >
              <Animated.Image
                source={eggImage}
                style={[styles.image, shakeStyle]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.textAboveImage}>🌼🩷</Text>
            </View>
            <View style={styles.randomImageContainer}>
              {isImageShown && (
                <Image
                  source={randomImage}
                  style={styles.randomImage}
                  resizeMode="contain"
                />
              )}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default EggScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textAboveImage: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  randomImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  randomImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    maxWidth: "100%",
    maxHeight: "90%",
  },
});
