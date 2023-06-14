import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
const Navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: "Welcome",

    defaultNavigationOptions: {
      title: "SupaMenu",
      headerShown: false,
    },
  }
);

export default createAppContainer(Navigator);
