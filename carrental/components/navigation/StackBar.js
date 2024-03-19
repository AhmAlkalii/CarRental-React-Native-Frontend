import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import DisplayPage from "../../Screens/DisplayPage";
import DescriptionPage from "../../Screens/DescriptionPage";
import AvailableCar from "../../Screens/AvailableCar";
import CustomerSupport from "../../Screens/Support";

const Stack = createNativeStackNavigator();

function StackBar() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Display"
        component={DisplayPage}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name="Car Details"
        component={DescriptionPage}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#FFE5E5",
          },
          contentStyle: { backgroundColor: "#FFE5E5" },
        }}
      />
      <Stack.Screen
        name="AvailableCars"
        component={AvailableCar}
        options={{ headerShown: false,
        contentStyle: { backgroundColor: "#2B292D" } }}
      />
      <Stack.Screen
        name="Support"
        component={CustomerSupport}
        options={{ headerShown: false,
        contentStyle: { backgroundColor: "lightgrey" } }}
      />
    </Stack.Navigator>
  );
}

export default StackBar;
