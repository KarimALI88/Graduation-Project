import {
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Image,
  Modal,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  RefreshControl 
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import RespHosp from "../components/RespHosp";
import hospitals from "../json-files/hospitals.json";
import { Entypo } from "@expo/vector-icons";
import AuthContext from "../context/AuthContext";

const reqHospImg = require("../assets/hospital-form.png");

export default function ReqHospital({navigation}) {
  const [location, setLocation] = useState({
    coords: {
      latitude: 30.158392910140286,
      longitude: 31.62863789393309,
    },
  });
  const [disease, setDisease] = useState(null);
  const [section, setSection] = useState(null);
  const [reqLocation, setReqLocation] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const {token} = useContext(AuthContext)
  const url = "http://192.168.1.8:8000/api/v1/select";
  // const JWT =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWNiYmI3MzBmMzBlOWY5MDhkM2MxNWQiLCJpYXQiOjE3MDk0OTI2NTcsImV4cCI6MTcxODEzMjY1N30.Q96G9xHJMwiH9-zjLHwdFkPrBwgAN9HN3fMHlkNW57k";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  const body = JSON.stringify({
    section: section,
    case: disease,
    latitude: location.latitude,
    longitude: location.longitude,
    // latitude:"30.158392910140286",
    // longitude:"31.62863789393309"
  });

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  const getHospitals = async () => {
    // e.preventDefault(); // Prevent default form submission behavior

    try {
      await setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();

      if (data) {
        console.log(" successful");
        // console.log(data);
        setHospitals(data);
        setVisible(true);
        // navigation.navigate("RespHosp")
        // setUser(data.data);
      } else {
        console.log("No token received");
        console.log(data);
        // setErrorMessage(data.message);
        // setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setReqLocation(false)
    setDisease(null)
    setLoading(false)
    setSection(null)
    // Perform your refresh logic here, such as fetching new data from an API

    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulate a delay of 2 seconds
  };

  useEffect(() => {
    if (reqLocation) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }
        try {
          let location = await Location.getCurrentPositionAsync({});
          setLocation({
            coords: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
          });
          console.log(location);
        } catch (error) {
          console.log("Error getting current position:", error);
        }
      })();
    } else {
      console.log("false");
    }
  }, [reqLocation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#071355"} color={"white"}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ff0000", "#00ff00", "#0000ff"]}
            tintColor="white"
            title="Loading..."
            titleColor="white"
            progressBackgroundColor="gray"
          />
        }
      >
        <View style={styles.imageContainer}>
          <Image source={reqHospImg} style={styles.hospImg} />
        </View>
        <View style={styles.formContainer}>
          {/* choose disease */}
          <View style={styles.inputContainer}>
            <View style={styles.labelView}>
              <FontAwesome name="stethoscope" size={40} color="#900" />
              <Text style={styles.label}>اختر المرض</Text>
            </View>
            <RNPickerSelect
              style={{
                inputIOS: {
                  backgroundColor: "white",
                  fontSize: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 4,
                  color: "black",
                  paddingRight: 30, // to ensure the text is never behind the icon
                  marginTop: 10,
                },
                inputAndroid: {
                  backgroundColor: "white",
                  fontSize: 16,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderWidth: 2,
                  borderColor: "purple",
                  borderRadius: 15,
                  color: "black",
                  paddingRight: 30, // to ensure the text is never behind the icon
                  marginTop: 10,
                },
              }}
              onValueChange={(value) => setDisease(value)}
              items={[
                { label: "غيبوبة", value: "غيبوبة" },
                { label: "نزيف", value: "نزيف" },
                { label: "ذبحة صدرية", value: "ذبحة صدرية" },
                { label: "جلطات", value: "جلطات" },
                { label: "أزمة قلبية", value: "أزمة قلبية" },
                { label: "تسمم", value: "تسمم" },
                { label: "حوادث", value: "حوادث" },
                { label: "حروق", value: "حروق" },
                { label: "عيون", value: "عيون" },
                { label: "نسا وتوليد", value: "نسا وتوليد" },
                { label: "يصعب التشخيص", value: "يصعب التشخيص" },
              ]}
            />
          </View>
          {/* choose private or governmental */}
          <View style={styles.inputContainer}>
            <View style={styles.labelView}>
              <FontAwesome name="bank" size={40} color="#900" />
              <Text style={styles.label}>اختر القطاع</Text>
            </View>
            <RNPickerSelect
              style={{
                inputIOS: {
                  backgroundColor: "white",
                  fontSize: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 4,
                  color: "black",
                  paddingRight: 30, // to ensure the text is never behind the icon
                  marginTop: 10,
                },
                inputAndroid: {
                  backgroundColor: "white",
                  fontSize: 16,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderWidth: 2,
                  borderColor: "purple",
                  borderRadius: 15,
                  color: "black",
                  paddingRight: 30, // to ensure the text is never behind the icon
                  marginTop: 10,
                },
              }}
              onValueChange={(value) => setSection(value)}
              items={[
                { label: "خاص", value: "خاص" },
                { label: "حكومي", value: "حكومي" },
                { label: "خاص أو حكومي ", value: "خاص أو حكومي" },
              ]}
            />
          </View>
          {/* location */}
          <View style={styles.inputContainer}>
            <View style={styles.labelView}>
              <FontAwesome name="crosshairs" size={40} color="#900" />
              <Text style={styles.label}> مكانك الان</Text>
            </View>
            {/* input location */}
            {/* MapView component */}
            {reqLocation ? (
              <MapView
                style={{ flex: 1, height: 200 }}
                region={{
                  latitude: location ? location.coords.latitude : 30.05364,
                  longitude: location ? location.coords.longitude : 31.50802,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                {location && (
                  <Marker
                    coordinate={{
                      latitude: location.coords.latitude,
                      longitude: location.coords.longitude,
                    }}
                    title="Your Location"
                  />
                )}
              </MapView>
            ) : (
              <View style={styles.locationImg}>
                <Pressable onPress={() => setReqLocation(true)}>
                  <Entypo name="location-pin" size={100} color="white" />
                </Pressable>
              </View>
            )}
          </View>

          {/* submit button */}
          {loading ? (
            <ActivityIndicator
              animating={true}
              color="white"
              size={100}
              style={{ marginVertical: 20 }}
            />
          ) : (
            <Pressable onPress={getHospitals}>
              <Text style={styles.button}>طلب</Text>
            </Pressable>
          )}
        </View>

        <RespHosp hospitals={hospitals} visible={visible} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ===================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#071355",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  hospImg: {
    width: 300,
    height: 300,
  },
  formContainer: {
    paddingVertical: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
  labelView: {
    flexDirection: "row-reverse", // Change the direction of the row to right-to-left
    alignItems: "center", // Align the items in the center
  },
  label: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginRight: 10,
  },
  locationImg: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#071355",
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
