import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Home from "./Home/Home";
import { EventRegister } from "react-native-event-listeners";
import { useState, useEffect } from "react";
import themeContext from "./components/darkMode/themeContext";
import theme from "./components/darkMode/theme";

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListner = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListner);
    };
  });
  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
        <Home />
      </NavigationContainer>
    </themeContext.Provider>
  );
}
