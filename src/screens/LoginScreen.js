import React from "react";
import { View, Text } from "react-native";

const LoginScreen = () => {
  return (
    <View className="container w-full h-full">
      <View className="h-full bg-[#1a3788]">
        <View className="container mt-28 h-full w-full bg-white rounded-t-3xl">
          <View className="items-center">
            <Text className="text-3xl font-bold mt-2">Login</Text>
            <Text className="text-gray-400 mt-1">Sign in to continue...</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
