import { Text, View, TextInput, Button, SafeAreaView } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { registerStyles } from "../components/styles/globalStyles";

const schema = yup.object().shape({
  // fullname: yup.string().required("Fullname is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export default function SignUp({ navigation }) {
  const [isChecked, setChecked] = useState(false);

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
          <SafeAreaView>
            <Text style={registerStyles.text}>Create Account</Text>
            <Text style={registerStyles.text2}>
              Create Account to access existing jobs
            </Text>

            <View style={registerStyles.inputContainer}>
              <Text style={registerStyles.inputText}>Full Name </Text>
              <TextInput
                style={registerStyles.input}
                placeholder="full name"
                onChangeText={props.handleChange("fullname")}
                // value={props.values.fullname}
              />
              {/* <Text style={{ color: "red" }}>{props.errors.fullname}</Text> */}
            </View>

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
                title="Sign Up"
                color="white"
                onPress={() => navigation.navigate("TabBar")}
              />
            </View>

            <View style={registerStyles.privacyContainer}>
              <Checkbox
                style={registerStyles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#2B292D" : undefined}
              />
              <Text>I agree to privacy policy</Text>
            </View>

            <View style={registerStyles.privacyContainer}>
              <Text>Already have an account ? Sign in </Text>
            </View>
          </SafeAreaView>
        </View>
      )}
    </Formik>
  );
}
