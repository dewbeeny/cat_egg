import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import useShakeAnimation from "../../hooks/useShakeAnimation";

const OneScreen = () => {
  const [shakeStyle, startShake] = useShakeAnimation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "black", fontSize: 20 }}>OneScreen</Text>
        <TouchableOpacity onPress={startShake}>
          <Animated.Image
            source={require("../level_1/level_1_egg.png")}
            style={[{ width: 200, height: 200 }, shakeStyle]} // 이미지 크기와 애니메이션 스타일 적용
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OneScreen;
