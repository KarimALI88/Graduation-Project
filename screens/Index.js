import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  Animated,
  Button,
  Platform,
} from "react-native";
import AuthContext from "../context/AuthContext";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

function Index({ navigation }) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const logo = require("../assets/logo.jpg");
  const { token } = useContext(AuthContext);
  const [isPressed, setIsPressed] = useState(false);
  const [isPressedFast, setIsPressedFast] = useState(false);
  // ********************************
  // ********************************

  // animation
  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  // useEffect(() => {
  //   startAnimation();
  // }, []);
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        token
          ? navigation.navigate("ReqHospital")
          : navigation.navigate("SigninScreen");
      }, 2000);

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, [token, navigation])
  );

  // ********************************
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#76b49f"} color={"white"} />
      {/* <Animated.View style={animatedStyle}> */}
      <Image style={styles.image} source={logo} resizeMode="contain" />
      {/* </Animated.View> */}
    </SafeAreaView>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: "#3573f9",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#071355",
    fontSize: 24,
    padding: 14,
    fontWeight: "500",
    textAlign: "right",
  },
  image: {
    height: 350,
    width: 350,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    color: "white",
    fontSize: 20,
    width: 300,
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 10,
    textAlign: "center",
    marginVertical: 30,
  },
  fastEnter: {
    fontSize: 18,
    fontWeight: "400",
  },
});
