import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { registerStyles } from "../components/styles/globalStyles";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export default function Login({ navigation }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(value, actions) => {
        console.log(value);
      }}
    >
      {(props) => (
        <View style={registerStyles.container}>
          <View>
            <Text style={registerStyles.text}>Login</Text>

            <View style={registerStyles.inputContainer}>
              <Text style={registerStyles.inputText}>Email </Text>
              <TextInput
                style={registerStyles.input}
                placeholder="email"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <Text style={{ color: "red" }}>{props.errors.email}</Text>
            </View>

            <View style={registerStyles.inputContainer}>
              <Text style={registerStyles.inputText}>Password </Text>
              <TextInput
                style={registerStyles.input}
                placeholder="password"
                secureTextEntry
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <Text style={{ color: "red" }}>{props.errors.password}</Text>
            </View>

            <View style={registerStyles.buttonContainer}>
              <Button
                style={registerStyles.button}
                title="Login"
                color="white"
                onPress={() => navigation.navigate("ForgotPassword")}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
