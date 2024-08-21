import React from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OneScreen from "./level_1/OneScreen";

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={styles.container}>
        <Text style={styles.title}>높은 레벨일수록 더 귀한 사진이다옹</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("OneScreen")}
        >
          <Text style={styles.buttonText}>Level 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TwoScreen")}
        >
          <Text style={styles.buttonText}>Level 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ThreeScreen")}
        >
          <Text style={styles.buttonText}>Level 3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FFD700", // 고양이의 황금빛 털을 연상시키는 색상
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25, // 버튼 모서리를 둥글게
    marginBottom: 20, // 버튼 사이 간격
    shadowColor: "#000", // 그림자 색상
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // 안드로이드 그림자 효과
  },
  buttonText: {
    color: "#FFF", // 텍스트를 흰색으로
    fontSize: 16,
    fontWeight: "bold",
  },
});
