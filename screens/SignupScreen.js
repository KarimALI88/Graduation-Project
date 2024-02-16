import {
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const signupImage = require("../assets/signup-img.png");
const signupIcon = require("../assets/sma3at.png");

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={signupImage}
        style={styles.signupImg}
        resizeMode="contain"
      />
      <View style={styles.createAcc}>
        <FontAwesome name="stethoscope" size={60} color="#900" />
        <Text style={styles.createAccText}>عمل حساب</Text>
      </View>
      <View style={styles.inputsView}>
        <View style={styles.labelView}>
          <FontAwesome name="user" size={30} color="#900" />
          <Text style={styles.label}>الاسم كامل</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="الاسم كامل"
          placeholderTextColor={"white"}
        />
      </View>
      {/* password */}
      <View style={styles.inputsView}>
        <View style={styles.labelView}>
          <FontAwesome name="user" size={30} color="#900" />
          <Text style={styles.label}>الاسم كامل</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="الاسم كامل"
          placeholderTextColor={"white"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: StatusBar.currentHeight,
  },
  signupImg: {
    // flex: 0.5, // Set the width of the image to 20% of its parent's width
    // aspectRatio: 1, // Maintain the aspect ratio of the image
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  createAcc: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  createAccText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#071355",
  },
  signupIcon: {
    width: 200,
    height: 100,
  },
  inputsView: {
    marginTop: 40,
  },
  input: {
    borderColor: "#071355",
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    backgroundColor: "#071355",
    color: "white",
    paddingHorizontal: 5,
  },
  labelView : {
    flexDirection: "row-reverse", // Change the direction of the row to right-to-left
    alignItems: "center", // Align the items in the center
  },
  label: {
    color: "#071355",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "right",
    marginRight: 10
  },
});
