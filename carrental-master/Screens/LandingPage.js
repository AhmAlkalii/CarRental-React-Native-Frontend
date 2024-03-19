import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  Button,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../components/styles/globalStyles";

export default function LandingPage({ navigation }) {
  const back = require("../assets/jake-pierre.jpg");
  return (
    <ImageBackground source={back} style={styles.backgroundImage}>
      <StatusBar barStyle={"light-content"} />

      <View style={styles.container}>
        <View style={styles.rentals}>
          <Text style={styles.text}>Rentals</Text>
        </View>

        <View>
          <Text style={styles.text}>
            Find the ideal car rental for your trip
          </Text>
          <Text style={styles.secondtext}>
            Get access to the best deals from global car brands
          </Text>
        </View>

        <View style={globalStyles.landingButton}>
          <Button
            title="Sign Up"
            color="black"
            onPress={() => navigation.navigate("Sign Up")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 54,
    paddingHorizontal: 14,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#f5f5f5",
  },
  secondtext: {
    fontSize: 19,
    color: "#fff",
    paddingTop: 25,
    marginBottom: 130,
  },
  button: {
    backgroundColor: "#90EE90",
    borderRadius: 26,
    borderWidth: 1,
    flexBasis: 50,
    marginTop: 50,
  },
  rentals: {
    marginBottom: 50,
    marginTop: 20,
  },
});
