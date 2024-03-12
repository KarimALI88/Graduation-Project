// App.js
import React from "react";
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Index"
//         screenOptions={{
//           tabBarLabelPosition: "below-icon",
//           tabBarActiveTintColor: "white",
//           tabBarStyle: { backgroundColor: "#071355" },
//           tabBarLabelStyle: { fontSize: 14 },
//           headerBackgroundContainerStyle: { backgroundColor: "#071355" },
//         }}
//       >
//         <Tab.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             tabBarLabel: "الصفحه الشخصيه",
//             tabBarIcon: ({ color }) => (
//               <Ionicons name={"person"} size={30} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="ReqHospital"
//           component={ReqHospital}
//           options={{
//             tabBarLabel: "طلب مستشفي",
//             tabBarIcon: ({ color }) => (
//               <Ionicons name={"add"} size={30} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Index"
//           component={Index}
//           options={{
//             tabBarLabel: "الرئيسيه",
//             tabBarIcon: ({ color }) => (
//               <Ionicons name={"heart"} size={30} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="AppStack"
//           component={AppStack}
//           options={{
//             tabBarLabel: "STACK",
//             tabBarIcon: ({ color }) => (
//               <Ionicons name={"heart"} size={30} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//       {/* <AppStack/>  */}
//       <ToastManager />
//     </NavigationContainer>
//   );
// };

// export default App;
// *****************************************************

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           tabBarLabelPosition: "below-icon",
//           tabBarActiveTintColor: "white",
//           tabBarStyle: {
//             backgroundColor: "#071355", // Background color
//             height: 70, // Height of the tab bar
//             paddingBottom:7,
//             shadowColor: "black", // Shadow color (if supported by the platform)
//             shadowOpacity: 0.2, // Shadow opacity
//             shadowOffset: { width: 0, height: 2 }, // Shadow offset
//             shadowRadius: 4, // Shadow radius
//             elevation: 5, // Elevation for Android (if required)
//           },
//           tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
//           headerShown: false,
//         }}
//       >
//         <Tab.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             tabBarLabel: "الصفحه الشخصيه",
//             tabBarIcon: ({ color }) => (
//               <Ionicons name={"person"} size={30} color={color} style={{fontWeight: "600"}} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="ReqHospital"
//           component={ReqHospital}
//           options={{
//             tabBarLabel: "طلب مستشفي",
//             tabBarIcon: ({ color }) => (
//               <FontAwesome5 name="hospital-alt" size={30} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Home"
//           component={StackNavigator}
//           options={{
//             tabBarLabel: "الصفحة الرئيسية",
//             tabBarIcon: ({ color }) => (
//               <Ionicons name={"home"} size={30} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//       <ToastManager />
//     </NavigationContainer>
//   );
// }

// // Define your StackNavigator component
// function StackNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Index"
//       screenOptions={{
//         contentStyle: { backgroundColor: "white" },
//         headerStyle: { backgroundColor: "#071355" },
//         headerTitleStyle: { fontWeight: "bold", textAlign: "right" }, // Set text alignment to right
//         headerTintColor: "#fff",
//         headerShown: true,
//         headerTitleAlign: "center", // Align header title to the right
//       }}
//     >
//       <Stack.Screen
//         name="Index"
//         component={Index}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="EnterEmail"
//         component={EnterEmail}
//         options={{
//           headerShown: true,
//           title: "ادخال الايميل",
//         }}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           headerShown: true,
//           title: "الصفحة الشخصية",
//         }}
//       />
//       <Stack.Screen
//         name="EnterVCode"
//         component={EnterVCode}
//         options={{
//           headerShown: true,
//           title: " ادخال كود التاكيد",
//         }}
//       />
//       <Stack.Screen
//         name="ResetPassword"
//         component={ResetPassword}
//         options={{
//           headerShown: true,
//           title: "ادخال كلمة المرور الجديدة",
//         }}
//       />
//       <Stack.Screen
//         name="ReqHospital"
//         component={ReqHospital}
//         options={{
//           headerShown: true,
//           title: "طلب مستشفي",
//         }}
//       />
//       <Stack.Screen
//         name="SigninScreen"
//         component={SigninScreen}
//         options={{
//           headerShown: true,
//           title: "تسجيل الدخول",
//         }}
//       />
//       <Stack.Screen
//         name="Signup"
//         component={Signup}
//         options={{
//           headerShown: true,
//           title: " انشاء حساب",
//         }}
//       />
//       <Stack.Screen
//         name="RespHosp"
//         component={RespHosp}
//         options={{
//           headerShown: true,
//           title: " المستشفيات المتاحة",
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// ************************************
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#071355", // Background color
          height: 70, // Height of the tab bar
          paddingBottom: 7,
          shadowColor: "black", // Shadow color (if supported by the platform)
          shadowOpacity: 0.2, // Shadow opacity
          shadowOffset: { width: 0, height: 2 }, // Shadow offset
          shadowRadius: 4, // Shadow radius
          elevation: 5, // Elevation for Android (if required)
        },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "الصفحه الشخصيه",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={"person"}
              size={30}
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
            <FontAwesome5 name="hospital-alt" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: "الصفحة الرئيسية",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"home"} size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Define your StackNavigator component
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
        headerStyle: { backgroundColor: "#071355" },
        headerTitleStyle: { fontWeight: "bold", textAlign: "right" }, // Set text alignment to right
        headerTintColor: "#fff",
        headerShown: true,
        headerTitleAlign: "center", // Align header title to the right
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
