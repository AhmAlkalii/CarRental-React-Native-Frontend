import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../Screens/LandingPage";
import TabBar from "../components/navigation/TabBar";
import SignUp from "../Screens/SignUp";
import Login from "../Screens/Login";
import ForgotPassword from "../Screens/ForgotPassword"

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerStyle: { backgroundColor: "#2B292D" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Landing"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
