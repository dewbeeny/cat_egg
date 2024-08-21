import { useRef } from "react";
import { Animated } from "react-native";

const useShakeAnimation = () => {
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const shakeStyle = {
    transform: [
      {
        translateX: shakeAnim.interpolate({
          inputRange: [-1, 1],
          outputRange: [-10, 10], // 흔들리는 범위 설정
        }),
      },
    ],
  };

  return [shakeStyle, startShake];
};

export default useShakeAnimation;
