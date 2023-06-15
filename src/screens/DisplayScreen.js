import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
const DisplayScreen = ({ navigation }) => {
  const token = navigation.getParam("token");
  const user = navigation.getParam("user");
  // console.log(user);
  // console.log(token);

  return (
    <View className="my-auto">
      <Text className=" text-center font-bold text-xl">
        Welcome
        <Text className="text-[#1a3788]">
          {" "}
          {user.firstname + " " + user.lastname}{" "}
        </Text>
      </Text>
    </View>
  );
};

export default DisplayScreen;
