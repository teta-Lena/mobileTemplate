// import * as SecureStore from "expo-secure-store";

// import axios from "axios";

const API_URL = "http://192.168.0.2:3000";
export default API_URL;

// export const sendRequest = async (api, method, payload = {}) => {
//   const token = await SecureStore.getItem("token");
//   const headers = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   if (token != null) {
//     headers.headers["Authorization"] = token;
//   }

//   try {
//     if (method === "GET") {
//       const response = await axios.get(api, headers);
//       return response;
//     } else if (method === "POST") {
//       const response = await axios.post(api, payload, headers);
//       return response;
//     } else if (method === "PUT") {
//       const response = await axios.put(api, payload, headers);
//       return response;
//     } else if (method === "DELETE") {
//       const response = await axios.delete(api, headers);
//       return response;
//     }
//   } catch (error) {
//     console.error("Error occurred during request:", error);
//     throw error;
//   }
// };
