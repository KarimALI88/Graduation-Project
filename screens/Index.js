import React, { useContext, useState, useRef, useEffect } from "react";
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
// import * as Device from "expo-device";
// import * as Notifications from "expo-notifications";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

function Index({ navigation }) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const logo = require("../assets/hompital-Logo.png");
  const { token } = useContext(AuthContext);
  const [isPressed, setIsPressed] = useState(false);

  // ********************************
  // const sendNotification = async () => {
  //   console.log("send notification");
  //   const message = {
  //     to: expoPushToken,
  //     sound: "default",
  //     title: "شغلت النوتيفيكيشن يا صيع يا صيع",
  //     body: "بس فرونت بس بصراحه",
  //   };
  //   await fetch("https://exp.host/--/api/v2/push/send", {
  //     method: "POST",
  //     headers: {
  //       host: "exp.host",
  //       accept: "application/json",
  //       "accept-encoding": "gzip, deflate",
  //       "content-type": "application/json",
  //     },
  //     body : JSON.stringify(message)
  //   });
  // };

  // useEffect(() => {
  //   console.log("registration");
  //   registerForPushNotificationsAsync()
  //     .then((token) => {
  //       console.log("token is ", token);
  //       setExpoPushToken(token);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // async function registerForPushNotificationsAsync() {
  //   let token;

  //   if (Platform.OS === "android") {
  //     await Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }

  //   if (Device.isDevice) {
  //     const { status: existingStatus } =
  //       await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       alert("Failed to get push token for push notification!");
  //       return;
  //     }
  //     // Learn more about projectId:
  //     // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
  //     token = (
  //       await Notifications.getExpoPushTokenAsync({
  //         projectId: "f67db72d-7652-45fc-80c0-70a27f8c5fae",
  //       })
  //     ).data;
  //     console.log(token);
  //   } else {
  //     alert("Must use physical device for Push Notifications");
  //   }

  //   return token;
  // }

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

  useEffect(() => {
    startAnimation();
  }, []);

  // ********************************
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#071355"} color={"white"} />
      <Text style={styles.title}>Hompital</Text>
      <Animated.View style={animatedStyle}>
        <Image style={styles.image} source={logo} resizeMode="contain" />
      </Animated.View>

      {/* <Text style={styles.text}>
        دلوقتي تقدر تعرف فين اقرب مستشفي بتعالج حالتك من بيتك وكمان بنساعد المسعفين
        فانهم يوفروا وقت ويروحوا القرب مستشفي متاحه ومتاح فيها مكان
      </Text> */}
      {token ? (
        <Pressable
          onPress={() => {
            navigation.navigate("ReqHospital");
          }}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Text
            style={[
              styles.button,
              { backgroundColor: isPressed ? "#071355" : "#900" },
            ]}
          >
            طلب مستشفي
          </Text>
        </Pressable>
      ) : (
        <>
          <Pressable
            onPress={() => {
              navigation.navigate("SigninScreen");
            }}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
          >
            <Text
              style={[
                styles.button,
                { backgroundColor: isPressed ? "#071355" : "#900" },
              ]}
            >
              تسجيل الدخول
            </Text>
          </Pressable>

          <Text
            style={styles.fastEnter}
            onPress={() => {
              navigation.navigate("ReqHospital");
            }}
          >
            دخول سريع
          </Text>
        </>
      )}
      {/* <Button title="send notification" onPress={sendNotification} /> */}
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
    // backgroundColor: "#900",
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
  fastEnter : {
    fontSize: 25,
    fontWeight: "400"
  }
});
