import {
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    View,
    Image,
    Modal,
    StyleSheet,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { FontAwesome } from "@expo/vector-icons";
  import RNPickerSelect from "react-native-picker-select";
  import MapView, { Marker } from "react-native-maps";
  import * as Location from "expo-location";
  
  const reqHospImg = require("../assets/hospital-form.png");
  
  export default function ReqHospital() {
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <ScrollView showsVerticalScrollIndicator={false}>
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
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: "غيبوبة", value: "غيبوبة" },
                  { label: "نزيف", value: "نزيف" },
                  { label: "ذبحة صدرية", value: "ذبحة صدرية" },
                  { label: "جلطات", value: "جلطات" },
                  { label: "ازمة قلبية", value: "ازمة قلبية" },
                  { label: "تسمم", value: "تسمم" },
                  { label: "حوادث", value: "حوادث" },
                  { label: "حروق", value: "حروق" },
                  { label: "عيون", value: "عيون" },
                  { label: "نسا وتوليد", value: "نسا وتوليد" },
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
                onValueChange={(value) => console.log(value)}
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
              <MapView
                style={{ flex: 1, height: 200 }}
                initialRegion={{
                  latitude: location ? location.coords.latitude : 0,
                  longitude: location ? location.coords.longitude : 0,
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
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

// ===================================================



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight,
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
});
