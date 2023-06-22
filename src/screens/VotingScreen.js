import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useIsFocused } from "@react-navigation/native";
import { Avatar, Button, Title, Paragraph } from "react-native-paper";

const VotingScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const isFocused = useIsFocused();

  const getUserProfile = async () => {
    try {
      setisLoading(true);
      const token = await SecureStore.getItemAsync("token");
      //   console.log(token);
      if (!token) {
        return navigation.navigate("Login");
      }
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const res = await fetch("http://192.168.0.114:3000/api/v1/u", {
        headers: headers,
      });
      const candidateResults = await fetch(
        "http://192.168.0.114:3000/api/v1/c",
        {
          headers: headers,
        }
      );
      if (res.error || candidateResults.error) {
        setError(res.error || candidateResults.error);
        setisLoading(false);
        return;
      } else {
        const data = await res.json();
        const candidateData = await candidateResults.json();

        setCandidates(candidateData?.data?.docs || []);
        console.log(candidates);
        setUser(data.user);
        setisLoading(false);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    isFocused && getUserProfile();
  }, [isFocused]);

  return (
    <SafeAreaView>
      <View className="flex flex-col items-center mt-20">
        <Text className="text-md">Welcome to the Voting System</Text>
        {isLoading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text className="font-bold my-2 text-md">
            {user.firstname + "  " + user.lastname}
          </Text>
        )}
      </View>
      <SafeAreaView>
        {isLoading ? (
          <ActivityIndicator color="#000" className="mt-20" />
        ) : (
          <>
            {candidates?.map((el) => (
              <View>
                <Card>
                  {el.profilePicture && el.profilePicture !== "" ? (
                    <Card.Cover source={{ uri: el.profilePicture }} />
                  ) : (
                    <View></View>
                  )}
                  <Card.Title
                    title={el.names}
                    subtitle={
                      error !== "" ? (
                        <Text style={tw`mt-4 text-red-500 text-center`}>
                          {error}
                        </Text>
                      ) : (
                        <Text>{el.total_votes || 0} votes</Text>
                      )
                    }
                  />
                  <Card.Content>
                    <Paragraph>{el.missionStatement}</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      onPress={() => {
                        handleVote(el._id);
                      }}
                    >
                      Vote
                    </Button>
                  </Card.Actions>
                </Card>
              </View>
            ))}
          </>
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default VotingScreen;
