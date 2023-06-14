import React from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Field, Formik } from "formik";
import * as yup from "yup";

import CustomInput from "../components/CustomInput";

const validRegister = yup.object().shape({
  firstname: yup.string().required().min(2),
  lastname: yup.string().required().min(2),
  phone: yup
    .string()
    .required()
    .matches(/(0)(\d){9}\b/, "Enter valid phone number"),
  email: yup.string().email("Please enter valid email").required(),
  password: yup
    .string()
    .required()
    .min(8, ({ min }) => `Password must be atleast ${min} characters`)
    .max(32),
});
//add confirmPassword
// confirmPassword: yup
// .string()
// .oneOf([yup.ref('password')], 'Passwords do not match')
// .required('Confirm password is required'),
// })
const RegisterScreen = () => {
  return (
    <View className="h-full bg-[#1a3788]">
      <Formik
        validationSchema={validRegister}
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <ScrollView className="container mt-28 w-full bg-white rounded-t-3xl">
              <View className="items-center">
                <Text className="text-xl font-bold mt-2">Sign up</Text>
                <Text className="text-gray-400 mt-1">
                  Fill in the fields to create your account..
                </Text>
              </View>
              <View className="mt-8">
                <View className="mt-2 w-full h-full">
                  <View className=" items-center w-full my-1">
                    <Field
                      component={CustomInput}
                      name="firstname"
                      placeholder="Enter your firstname"
                    />
                  </View>
                  <View className="items-center w-full  my-1">
                    <Field
                      component={CustomInput}
                      name="lastname"
                      placeholder="Enter your lastname"
                    />
                  </View>
                  <View className="items-center w-full  my-1">
                    <Field
                      component={CustomInput}
                      name="email"
                      placeholder="Enter your email"
                    />
                  </View>
                  <View className="items-center w-full  my-1">
                    <Field
                      component={CustomInput}
                      name="phone"
                      placeholder="Enter your phone"
                    />
                  </View>
                  <View className="items-center w-full  my-1">
                    <Field
                      component={CustomInput}
                      name="password"
                      placeholder="Enter your password"
                      secureTextEntry
                    />
                  </View>
                  <View className="mx-4 my-5 h-full">
                    <Button
                      title="Sign up"
                      buttonStyle={style.btn}
                      onPress={handleSubmit}
                      //   disabled={!isValid}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
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

export default RegisterScreen;