// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from './screens/Profile';
import ReqHospital from './screens/ReqHospital';
import Index from './screens/Index';
import AppStack from './AppStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: 'white',
          tabBarStyle: { backgroundColor: '#071355' },
          tabBarLabelStyle: { fontSize: 14 },
        }}>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'الصفحه الشخصيه',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'person'} size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ReqHospital"
          component={ReqHospital}
          options={{
            tabBarLabel: 'طلب مستشفي',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'add'} size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Index"
          component={AppStack}
          options={{
            tabBarLabel: 'الرئيسيه',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'heart'} size={30} color={color} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="About Stack"
          component={AppStack}
          options={{
            tabBarLabel: 'About',
            tabBarVisible: false,
          }}
        /> */}
      </Tab.Navigator>
      {/* <AppStack/>  */}
</NavigationContainer>
  );
};

export default App;
