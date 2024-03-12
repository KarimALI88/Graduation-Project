import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import { Toast } from "toastify-react-native";
import { Formik } from "formik";
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";

export default function ResetPassword({ navigation }) {
  const [apiMessage, setApiMessage] = useState("");
  const JWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWUxZGIzOTdmNzg3ZjliMWI3MWViNGUiLCJpYXQiOjE3MDkzMTg4MDIsImV4cCI6MTcxNzk1ODgwMn0.EkfxpObCa6FmyUmvJDFo0_mxQJZS5ZpiUOvsPfACk38";
  let formValidation = Yup.object({
    newPassword: Yup.string()
      .required("يرجى ادخال كلمة المرور")
      .matches(
        /^[A-Z][\w @]{5,8}$/,
        "كلمة المرور يجب أن تحتوي على حرف كبير وحرف خاص"
      ),
    passwordConfirm: Yup.string()
      .required("يرجي تاكيد كلمه المرور")
      .oneOf([Yup.ref("newPassword")], "تأكيد كلمة المرور غير صحيح"),
  });

  async function newPasswordSubmit(values) {
    try {
      const response = await fetch(
        "http://192.168.1.7:8000/api/v1/auth/resetPassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JWT,
          },
          body: JSON.stringify({
            newPassword: values.newPassword,
            passwordConfirm: values.passwordConfirm,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setApiMessage(data.message);
        Toast.success(apiMessage);
        setTimeout(() => {
          navigation.navigate("SigninScreen");
        }, 3000);
      } else {
        setApiMessage(data.message);
        Toast.error(apiMessage);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#071355"} color={"white"} />
      <Formik
        initialValues={{
          newPassword: "",
          passwordConfirm: "",
        }}
        validationSchema={formValidation}
        onSubmit={newPasswordSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                  <Text style={styles.createAccText}>تغيير كلمه السر</Text>
                </View>
              </View>
              <View></View>

              {/* password*/}
              <View style={styles.inputsView}>
                <View style={styles.labelView}>
                  <FontAwesome name="key" size={30} color="#900" />
                  <Text style={styles.label}> كلمه المرور</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="  كلمه المرور"
                  placeholderTextColor={"#071355"}
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                />
                {errors.newPassword && touched.newPassword ? (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.newPassword}
                  </Text>
                ) : (
                  ""
                )}
              </View>
              {/* confirmpassword*/}
              <View style={styles.inputsView}>
                <View style={styles.labelView}>
                  <FontAwesome name="key" size={30} color="#900" />
                  <Text style={styles.label}> تأكيد كلمه المرور</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder=" تأكيد كلمه المرور"
                  placeholderTextColor={"#071355"}
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={handleChange("passwordConfirm")}
                  onBlur={handleBlur("passwordConfirm")}
                  value={values.passwordConfirm}
                />
                {errors.passwordConfirm && touched.passwordConfirm && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.passwordConfirm}
                  </Text>
                )}
              </View>
              <Pressable onPress={handleSubmit}>
                <Text style={styles.button} type="submit">
                  تسجيل{" "}
                </Text>
              </Pressable>
            </ScrollView>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
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
