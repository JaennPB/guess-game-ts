import { NativeBaseProvider, Flex } from "native-base";

import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <Flex flex={1} justify="center" px={5}>
        <StartGameScreen />
      </Flex>
    </NativeBaseProvider>
  );
}
