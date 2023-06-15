import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Formik } from "formik";
import * as yup from "yup";

// import Login from "../components/Login";

const validLogin = yup.object().shape({
  email: yup.string().email("Please enter valid email").required(),
  password: yup
    .string()
    .required()
    .min(8, ({ min }) => `Password must be atleast ${min} characters`)
    .max(32),
});

const LoginScreen = ({ navigation }) => {
  return (
    <View className="container w-full h-full">
      <View className="h-full bg-[#1a3788]">
        <Formik
          validationSchema={validLogin}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            try {
              const res = await fetch(
                "http://192.168.8.151:3000/api/users/login",
                {
                  method: "POST",
                  body: JSON.stringify(values),
                  headers: {
                    "Content-Type": "application/json", // Set the content type header
                  },
                }
              );
              const result = await res.json();
              console.log(result);
              if (result.error) {
                return console.log("Error");
              } else {
                navigation.navigate("dashboard", { token: result.token });
              }
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View className="container mt-28 h-full w-full bg-white rounded-t-3xl">
                <View className="items-center">
                  <Text className="text-xl font-bold mt-2">Login</Text>
                  <Text className="text-gray-400 mt-1">
                    Sign in to continue...
                  </Text>
                </View>
                <View className="mt-8">
                  <View className="mt-2 w-full h-full">
                    <View className="items-center w-full  my-1">
                      <TextInput
                        name="email"
                        onBlur={handleBlur("email")}
                        value={values.email}
                        onChangeText={handleChange("email")}
                        placeholder="Enter your email"
                        className="rounded border-2 border-gray-200 py-2 text-left px-4 w-[90%]"
                      />
                      {errors.email && touched.email && (
                        <Text className="text-red-700">{errors.email}</Text>
                      )}
                    </View>

                    <View className="items-center w-full  my-1">
                      <TextInput
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        name="password"
                        value={values.password}
                        secureTextEntry
                        placeholder="Enter your password"
                        className="rounded border-2 border-gray-200 py-2 text-left px-4 w-[90%]"
                      />
                      {errors.password && touched.password && (
                        <Text className="text-red-700">{errors.password}</Text>
                      )}
                    </View>

                    <View className="mx-4 my-5">
                      <Button
                        title="Log in"
                        buttonStyle={style.btn}
                        onPress={handleSubmit}
                        disabled={!isValid}
                      />
                    </View>
                    <View className="w-full h-[4%] flex flex-row">
                      <View className="w-[40%] border-solid border border-black m-auto" />
                      <Text>OR</Text>
                      <View className="w-[40%] border-solid border borqder-black m-auto" />
                    </View>
                    <View className="w-full h-[30%] mt-2">
                      <View className="mx-4 my-1 ">
                        {/* <Icon type="material" name="facebook" /> */}
                        <Button
                          title="Login with Facebook"
                          buttonStyle={style.btn}
                        />
                      </View>

                      <View className="mx-4 my-1 ">
                        <Button
                          title="Login with Google"
                          buttonStyle={style.gbtn}
                        />
                      </View>

                      <View className="flex-row justify-center my-4">
                        <Text> Don't have an account ....</Text>
                        <Text
                          className="text-blue-800"
                          onPress={() => navigation.navigate("Register")}
                        >
                          Register
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  btn: {
    backgroundColor: "#1a3788",
  },
  gbtn: {
    backgroundColor: "red",
  },
});

export default LoginScreen;
