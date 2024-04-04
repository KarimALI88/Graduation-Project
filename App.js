// App.js
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ToastManager from "toastify-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./screens/Index";
import Signup from "./screens/SignupScreen";
import ReqHospital from "./screens/ReqHospital";
import SigninScreen from "./screens/SigninScreen";
import Profile from "./screens/Profile";
import EnterEmail from "./screens/Forgetpassword/EnterEmail";
import ResetPassword from "./screens/Forgetpassword/ResetPassword";
import EnterVCode from "./screens/Forgetpassword/EnterVCode";
import RespHosp from "./components/RespHosp";
import { FontAwesome5 } from "@expo/vector-icons";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <NavigationContainer>
          <TabNavigator />
          <ToastManager />
        </NavigationContainer>
      </ModalProvider>
    </AuthProvider>
  );
}

function TabNavigator() {
  const { token } = useContext(AuthContext);

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#071355",
          height: 70,
          paddingBottom: 7,
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 5,
        },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
        headerShown: false,
      }}
    >
      {token ? (
        <>
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "الصفحه الشخصيه",
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name={"person"}
                  size={27}
                  color={color}
                  style={{ fontWeight: "600" }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ReqHospital"
            component={ReqHospital}
            options={{
              tabBarLabel: "طلب مستشفي",
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="hospital-alt" size={27} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={StackNavigator}
            options={{
              tabBarLabel: "الصفحة الرئيسية",
              tabBarIcon: ({ color }) => (
                <Ionicons name={"home"} size={27} color={color} />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="SigninScreen"
            component={SigninScreen}
            options={{
              contentStyle: { backgroundColor: "white" },
              tabBarLabel: " تسجيل الدخول",
              tabBarIcon: ({ color }) => (
                <Ionicons name="key-outline" size={27} color={color}></Ionicons>
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={StackNavigator}
            options={{
              style: { backgroundColor: "white" },
              tabBarLabel: "الصفحة الرئيسية",
              tabBarIcon: ({ color }) => (
                <Ionicons name={"home"} size={27} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Signup"
            component={Signup}
            options={{
              tabBarLabel: "  انشاء حساب",
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="person-add-outline"
                  size={27}
                  color={color}
                ></Ionicons>
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Index"
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
        headerStyle: { backgroundColor: "#071355" },
        headerTitleStyle: { fontWeight: "bold", textAlign: "right" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Index"
        component={Index}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterEmail"
        component={EnterEmail}
        options={{
          headerShown: true,
          title: "ادخال الايميل",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          title: "الصفحة الشخصية",
        }}
      />
      <Stack.Screen
        name="EnterVCode"
        component={EnterVCode}
        options={{
          headerShown: true,
          title: " ادخال كود التاكيد",
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: true,
          title: "ادخال كلمة المرور الجديدة",
        }}
      />
      <Stack.Screen
        name="ReqHospital"
        component={ReqHospital}
        options={{
          headerShown: true,
          title: "طلب مستشفي",
        }}
      />
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{
          headerShown: true,
          title: "تسجيل الدخول",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: true,
          title: " انشاء حساب",
        }}
      />
      <Stack.Screen
        name="RespHosp"
        component={RespHosp}
        options={{
          headerShown: true,
          title: " المستشفيات المتاحة",
        }}
      />
    </Stack.Navigator>
  );
}
