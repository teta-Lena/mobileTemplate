import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import DisplayScreen from "./src/screens/DisplayScreen";
const Navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    dashboard :DisplayScreen
    
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
