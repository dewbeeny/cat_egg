import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./pages/MainScreen";
import OneScreen from "./pages/level_1/OneScreen"; // 경로와 파일명을 올바르게 지정하세요
import TwoScreen from "./pages/level_2/TwoScreen";
import ThreeScreen from "./pages/level_3/ThreeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="안녕하냐옹">
      <Stack.Screen name="Cat's Egg 😸" component={MainScreen} />
      <Stack.Screen name="OneScreen" component={OneScreen} />
      <Stack.Screen name="TwoScreen" component={TwoScreen} />
      <Stack.Screen name="ThreeScreen" component={ThreeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
