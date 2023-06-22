import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
const Dashboard = ({ navigation }) => {
  const token = navigation.getParam("token");
  const user = navigation.getParam("user");

  const getToken = async () => {
    // const token = await SecureStore.getItemAsync("token");
    // console.log(token);
  };

  // const users = await fetch()
  // console.log(user);
  // console.log(token);
  // getToken();
  return (
    <View className="my-auto">
      <Text className=" text-center font-bold text-xl">
        Welcome {"  "}
        <Text className="text-[#1a3788]">
          {user.firstname + " " + user.lastname}
        </Text>
      </Text>

      <View>
        <Button
          title="Go to dashboard"
          onPress={() => navigation.navigate("VotingScreen")}
        />
      </View>
    </View>
  );
};

export default Dashboard;
