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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { Toast } from "toastify-react-native";
import AuthContext from "../context/AuthContext";

// const bg = require("../assets/signin.jpg");

function SigninScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const {setToken} = useContext(AuthContext)

  const validateForm = () => {
    let errors = {};

    if (!email) errors.email = "يرجي ادخال ايميل";
    if (!password) errors.password = "يرجي ادخال كلمة المرور";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const url = "http://192.168.1.8:8000/api/v1/auth/login";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + AsyncStorage.getItem("JWT"),
  };
  const body = JSON.stringify({
    email: email,
    password: password,
  });
  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  const handleSubmit = async () => {
    // Prevent default form submission behavior

    if (validateForm()) {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.token) {
          // Set the success message first
          setSuccessMessage("تم تسجيل الدخول");

          // Update AsyncStorage with the token
          await AsyncStorage.setItem("JWT", data.token);
          setToken(data.token)

          // Display the success toast message after the state has been updated
          
          
           Toast.success(successMessage)

  
          setErrorMessage(null);
          setTimeout(()=>{navigation.navigate("Index")},3000)
        } else {
          // Set the error message
          setErrorMessage(data.message);
          Toast.error(errorMessage);
          setSuccessMessage(null);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.contanier}>
      {/* <Image source={bg} style={styles.Image} resizeMode="cover" /> */}
      {/* <StatusBar backgroundColor="#3447b2" /> */}
      <StatusBar backgroundColor={"#071355"} color={"white"}/>
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
          {/* {errorMessage != null ? (
            <Text style={styles.errorMsg}>{errorMessage}</Text>
          ) : null}
          {successMessage != null ? (
            <Text style={styles.successMsg}>{successMessage}</Text>
          ) : null} */}
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
              onChangeText={setEmail}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
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
              onChangeText={setPassword}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>
          <View style={styles.quesContainer}>
            <Pressable
              onPress={() => {
                navigation.navigate("EnterEmail");
              }}
            >
              <Text style={styles.signupLink}>هل نسيت كلمة المرور؟</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <Text style={styles.forgetPass}>
                اذا لم يكن لديك حساب قم بالتسجيل.
              </Text>
            </Pressable>
          </View>
          <Pressable onPress={handleSubmit}>
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
    // paddingVertical: StatusBar.currentHeight,
    justifyContent: "center",
    backgroundColor: "white"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signupImg: {
    // flex: 0.5, // Set the width of the image to 20% of its parent's width
    // aspectRatio: 1, // Maintain the aspect ratio of the image
    width: "100%",
    height: 350,
    marginBottom: 20,
  },
  form: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
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
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 13,
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
    marginVertical: 30,
  },
  successMsg: {
    marginVertical: 10,
    color: "green",
    fontSize: 22,
    fontWeight: "500",
  },
  errorMsg: {
    marginVertical: 10,
    color: "#900",
    fontSize: 22,
    fontWeight: "500",
  },
  quesContainer: {
    marginTop: 20,
  },
  signupLink: {
    marginBottom: 10,
    fontSize: 16,
  },
  forgetPass: {
    marginBottom: 10,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});
