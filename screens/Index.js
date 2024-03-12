import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";

function Index({ navigation }) {
  const logo = require("../assets/hompital-Logo.png");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#071355"} color={"white"}/>
      <Text style={styles.title}>Hompital</Text>
      <Image style={styles.image} source={logo} resizeMode="contain" />

      {/* <Text style={styles.text}>
        دلوقتي تقدر تعرف فين اقرب مستشفي بتعالج حالتك من بيتك وكمان بنساعد المسعفين
        فانهم يوفروا وقت ويروحوا القرب مستشفي متاحه ومتاح فيها مكان
      </Text> */}
      <Pressable
        onPress={() => {
          navigation.navigate("SigninScreen");
        }}
      >
        <Text style={styles.button}>تسجيل الدخول</Text>
      </Pressable>
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
    // paddingBottom: 20,
  },
  title: {
    color: "#071355",
    fontSize: 30,
    fontWeight: "bold",
    // marginTop: 25,
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
    // marginTop: -30,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "#900",
    color: "white",
    fontSize: 20,
    width:300,
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
});
