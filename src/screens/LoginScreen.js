import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

// import Login from "../components/Login";

const LoginScreen = ({ navigation }) => {
  return (
    <View className="container w-full h-full">
      <View className="h-full bg-[#1a3788]">
        <View className="container mt-28 h-full w-full bg-white rounded-t-3xl">
          <View className="items-center">
            <Text className="text-3xl font-bold mt-2">Login</Text>
            <Text className="text-gray-400 mt-1">Sign in to continue...</Text>
          </View>
          <View className="mt-8">
            <View className="mt-2 w-full h-full">
              <View className=" items-center w-full   my-2 ">
                <TextInput
                  placeholder="Enter your email"
                  className="rounded border-2 border-gray-200  py-2 text-left px-4 w-[90%]"
                />
              </View>
              <View className="items-center w-full  my-2">
                <TextInput
                  placeholder="Enter your password"
                  className="rounded border-2 border-gray-200 py-2 text-left px-4 w-[90%]"
                />
              </View>
              <View className="mx-4 my-5">
                <Button title="Log in" buttonStyle={style.btn} />
              </View>

              <View className="w-full h-[4%] flex flex-row">
                <View className="w-[40%] border-solid border border-black m-auto" />
                <Text>OR</Text>
                <View className="w-[40%] border-solid border borqder-black m-auto" />
              </View>
              <View className="w-full h-[30%] mt-2">
                <View className="mx-4 my-2 ">
                  {/* <Icon type="material" name="facebook" /> */}
                  <Button title="Login with Facebook" buttonStyle={style.btn} />
                </View>

                <View className="mx-4 my-2 ">
                  <Button title="Login with Google" buttonStyle={style.gbtn} />
                </View>
              </View>
            </View>
          </View>
        </View>
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
