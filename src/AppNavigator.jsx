import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./pages/MainScreen";
import OneScreen from "./pages/level_1/OneScreen";
import TwoScreen from "./pages/level_2/TwoScreen";
import ThreeScreen from "./pages/level_3/ThreeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: "Fl🌸werHeart" }}
      />
      <Stack.Screen
        name="OneScreen"
        component={OneScreen}
        options={{ title: "Level 1" }}
      />
      <Stack.Screen
        name="TwoScreen"
        component={TwoScreen}
        options={{ title: "Level 2" }}
      />
      <Stack.Screen
        name="ThreeScreen"
        component={ThreeScreen}
        options={{ title: "Level 3" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
