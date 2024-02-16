import {
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome } from "@expo/vector-icons";

const signupImage = require("../assets/signup-img.png");
const signupIcon = require("../assets/sma3at.png");

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={signupImage}
            style={styles.signupImg}
            resizeMode="contain"
          />
        </View>
        <View style={styles.createAcc}>
          <FontAwesome name="stethoscope" size={60} color="#071355" />
          <Text style={styles.createAccText}>إنشاء حساب</Text>
        </View>
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <FontAwesome name="user" size={30} color="#071355" />
            <Text style={styles.label}>الاسم كامل</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="الاسم كامل"
            placeholderTextColor={"#071355"}
          />
        </View>
        {/* age*/}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <FontAwesome name="calendar" size={30} color="#071355" />
            <Text style={styles.label}> العمر</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="العمر "
            placeholderTextColor={"#071355"}
            keyboardType="numeric"
          />
        </View>
        {/* phone*/}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <FontAwesome name="phone" size={30} color="#071355" />
            <Text style={styles.label}> الهاتف</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder=" الهاتف"
            placeholderTextColor={"#071355"}
            keyboardType="phone-pad"
          />
        </View>
        {/* email*/}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <FontAwesome name="envelope" size={30} color="#071355" />
            <Text style={styles.label}> البريد الالكتروني</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder=" البريد الالكتروني"
            placeholderTextColor={"#071355"}
            keyboardType="email-address"
          />
        </View>
        {/* password*/}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <FontAwesome name="key" size={30} color="#071355" />
            <Text style={styles.label}> كلمه المرور</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="  كلمه المرور"
            placeholderTextColor={"#071355"}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        {/* confirmpassword*/}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <FontAwesome name="key" size={30} color="#071355" />
            <Text style={styles.label}> تأكيد كلمه المرور</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder=" تأكيد كلمه المرور"
            placeholderTextColor={"#071355"}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        {/* gender*/}
        <View style={styles.inputsView}>
          <View style={styles.labelView}>
            <FontAwesome name="venus-mars" size={30} color="#071355"/>
            <Text style={styles.label}> النوع </Text>
          </View>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "ذكر", value: "male" },
              { label: "انثي", value: "female" },
            ]}
          />
        </View>
        <Pressable>
          <Text style={styles.button}>تسجيل </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 15,
  },
  imageContainer : {
    justifyContent: "center",
    alignItems: "center",
  },
  signupImg: {
    // flex: 0.5, // Set the width of the image to 20% of its parent's width
    // aspectRatio: 1, // Maintain the aspect ratio of the image
    width: 300,
    height: 300,
  },
  createAcc: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
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
  },
  label: {
    color: "#071355",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "right",
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "#071355",
    color: "white",
    fontSize: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 10,
    textAlign: "center",
    marginVertical: 20,
  },
});
