import { NativeBaseProvider } from "native-base";

import { Provider } from "react-redux";
import { store } from "./src/app/store";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import StartGameScreen from "./src/screens/StartGameScreen";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export type StackParams = {
  StartGameScreen: undefined;
  GameScreen: undefined;
  GameOverScreen: undefined;
};
export type GameScreenProp = NativeStackNavigationProp<StackParams>;

const RootStack = createNativeStackNavigator<StackParams>();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerBackVisible: false,
              headerShown: false,
            }}
          >
            <RootStack.Screen
              name="StartGameScreen"
              component={StartGameScreen}
            />
            <RootStack.Screen name="GameScreen" component={GameScreen} />
            <RootStack.Screen
              name="GameOverScreen"
              component={GameOverScreen}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
