import { NativeBaseProvider, Flex } from "native-base";

import { Provider } from "react-redux";
import { store } from "./src/app/store";

import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Flex flex={1} justify="center" px={5}>
          <StartGameScreen />
        </Flex>
      </NativeBaseProvider>
    </Provider>
  );
}
