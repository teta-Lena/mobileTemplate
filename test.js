// const testSomething = async () => {
//     try {
//         const response = await fetch(
//           "http://localhost:3000/api/v1/u/login",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               email: "tetalenaa@gmail.com",
//               password: "teta2005",
//             }),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (!response.ok) {
//             console.log(response)
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
// }

// testSomething()

//       //   const candidateResults = await axios.get(
//       //     "http://192.168.0.114/api/v1/c",
//       //     {
//       //       headers,
//       //     }
//       //   );

//       //   const cres = candidateResults.json();
//       //   setCandidates(cres?.data?.docs || []);
//     } catch (e) {
//         setError(e.message);
//       }
//     };
//     //   const handleVote = async (candidate) => {
//     //     try {
//     //       setisLoading(true);
//     //       const token = await SecureStore.getItemAsync("token");
//     //       if (!token) {
//     //         return navigation.navigate("Login");
//     //       }
//     //       const headers = {
//     //         Authorization: `Bearer ${token}`,
//     //       };
//     //       const data = { user: user._id, candidate };
//     //       let res = await axios.post(
//     //         "http://192.168.0.114/api/v1/v/",
//     //         { headers },
//     //         data
//     //       );
//     //       if (!res?.success) {
//     //         setError(res?.message || "Something went wrong");
//     //         setTimeout(() => {
//     //           setError("");
//     //         }, 3000);
//     //         return;
//     //       }
//     //       setisLoading(false);
//     //     } catch (e) {
//     //       setError(e.message);
//     //     }
//     //   };

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
                  <Text style={tw`mt-4 text-red-500 text-center`}>{error}</Text>
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
</SafeAreaView>;


try {
    setisLoading(true);
    const response = await sendRequest(
      API_URL + "/v1/u/login",
      "POST",
      values
    );
    if (response?.data?.status == 200) {
      setLoading(false);
      const token = response?.data?.data?.access_token;

      // Decode the JWT token
      const decodedToken = jwt_decode(token);
      const role = decodedToken?.role;

      if (role !== "voter") {
      return setError("You are not authorized to access this app.");
      }
      await SecureStore.setItem("token", token);
      navigation.navigate("Welcome");
      resetForm();
    }
  } catch (e) {
    console.log(e);
    setError(e.message);
  }