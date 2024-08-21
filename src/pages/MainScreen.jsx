import React from "react";
import {
  StyleSheet,
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
        <Text style={styles.title}>알을 깨라!🐣</Text>
        <TouchableOpacity
          style={[styles.button, styles.level1]}
          onPress={() => navigation.navigate("OneScreen")}
        >
          <Text style={styles.buttonText}>Level 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.level2]}
          onPress={() => navigation.navigate("TwoScreen")}
        >
          <Text style={styles.buttonText}>Level 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.level3]}
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
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  level1: {
    backgroundColor: "#F8C8DC",
  },
  level2: {
    backgroundColor: "#DFA48F",
  },
  level3: {
    backgroundColor: "#A56A4F",
  },
});
