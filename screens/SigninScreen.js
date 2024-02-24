import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// const bg = require("../assets/signin.jpg");

function SigninScreen() {
  return (
    <SafeAreaView style={styles.contanier}>
      {/* <Image source={bg} style={styles.Image} resizeMode="cover" /> */}
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-doctor_183364-114487.jpg?w=360&t=st=1708419125~exp=1708419725~hmac=673a911799f6fc9e5d5bde285346169af5f270a5ef675ceec33f29555b6e401e",
            }}
            style={styles.signupImg}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <View style={styles.createAcc}>
            <FontAwesome name="stethoscope" size={60} color="#900" />
            <Text style={styles.createAccText}>تسجيل الدخول</Text>
          </View>
          <View style={styles.inputsView}>
            <View style={styles.labelView}>
              <FontAwesome name="envelope" size={30} color="#900" />
              <Text style={styles.label}> البريد الالكتروني</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder=" البريد الالكتروني"
              placeholderTextColor={"white"}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputsView}>
            <View style={styles.labelView}>
              <FontAwesome name="key" size={30} color="#900" />
              <Text style={styles.label}> كلمه المرور</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="  كلمه المرور"
              placeholderTextColor={"white"}
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>
          <Pressable>
            <Text style={styles.button}>تسجيل </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight,
    justifyContent: "center",
  },
  // Image: {
  //   height: "40%",
  //   width: "100%",
  // },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signupImg: {
    // flex: 0.5, // Set the width of the image to 20% of its parent's width
    // aspectRatio: 1, // Maintain the aspect ratio of the image
    width: 300,
    height: 300,
  },
  form: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 40,
    paddingHorizontal: 15,
  },
  inputsView: {
    marginTop: 40,
  },
  input: {
    // borderBottomColor: "#071355",
    // borderBottomWidth: 2,
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    backgroundColor: "white",
    color: "white",
    paddingHorizontal: 5,
    textAlign: "right",
    backgroundColor: "#071355",
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
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "#900",
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
    marginVertical: 60,
  },
});
