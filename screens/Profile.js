import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const image = require("../assets/profile-image.png");

function Profile() {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.profileImg} />
      <ScrollView>
        {/* {emial} */}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <View style={styles.title}>
              <FontAwesome name="envelope" size={30} color="#900" />
              <Text style={styles.label}> البريد الالكتروني</Text>
            </View>
            <FontAwesome name="pencil" size={30} style={styles.icon} />
          </View>
          <Text style={styles.value}>dm383960@gmail.com</Text>
          {/* <TextInput
            style={styles.input}
            placeholder=" البريد الالكتروني"
            placeholderTextColor={"#071355"}
            keyboardType="email-address"
          /> */}
        </View>
        {/* {name} */}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <View style={styles.title}>
              <FontAwesome name="envelope" size={30} color="#900" />
              <Text style={styles.label}> الاسم </Text>
            </View>
            <FontAwesome name="pencil" size={30} style={styles.icon} />
          </View>
          <Text style={styles.value}>ضحى محمد رمضان</Text>
          {/* <TextInput
            style={styles.input}
            placeholder=" البريد الالكتروني"
            placeholderTextColor={"#071355"}
            keyboardType="email-address"
          /> */}
        </View>
        {/* {password} */}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <View style={styles.title}>
              <FontAwesome name="envelope" size={30} color="#900" />
              <Text style={styles.label}> كلمه السر </Text>
            </View>
            <FontAwesome name="pencil" size={30} style={styles.icon} />
          </View>
          <Text style={styles.value}>*********</Text>
          {/* <TextInput
            style={styles.input}
            placeholder=" البريد الالكتروني"
            placeholderTextColor={"#071355"}
            keyboardType="email-address"
          /> */}
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight,
  },
  profileImg: {
    // flex: 0.5, // Set the width of the image to 20% of its parent's width
    // aspectRatio: 1, // Maintain the aspect ratio of the image
    width: 450,
    height: 450,
    justifyContent: "center",
    display: "flex",
  },
  inputsView: {
    marginTop: 40,
  },
  input: {
    borderBottomColor: "#071355",
    borderBottomWidth: 2,
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    backgroundColor: "white",
    color: "#071355",
    paddingHorizontal: 5,
    textAlign: "right",
  },
  labelView: {
    flexDirection: "row-reverse", // Change the direction of the row to right-to-left
    alignItems: "center", // Align the items in the center
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  label: {
    color: "#071355",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "right",
    marginRight: 10,
  },
  icon: {
    alignItems: "flex-start",
  },
  title: {
    flexDirection: "row-reverse",
  },
  value: {
    fontSize: 20,
    fontWeight: "400",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#071355",
  },
});
