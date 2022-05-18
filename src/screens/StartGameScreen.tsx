import { useState } from "react";
import { Box, Flex, Input, Button, Heading } from "native-base";
import { Alert } from "react-native";

import { useAppDispatch } from "../hooks/reduxHooks";
import { useAppNavigation } from "../hooks/navigationHooks";

import { confirmUserInput } from "../app/mainSlice";

const StartGameScreen: React.FC = () => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const navigation = useAppNavigation();

  function inputChangeHandler(value: string): void {
    setEnteredValue(value);
  }

  function resetHandler(): void {
    setEnteredValue("");
  }

  function confirmInputHandler(): void {
    const userNumber = parseInt(enteredValue);

    if (isNaN(userNumber) || userNumber <= 0 || userNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        { text: "Got it!", style: "cancel", onPress: resetHandler },
      ]);
      return;
    }

    setEnteredValue("");

    dispatch(confirmUserInput(userNumber));
    navigation.navigate("GameScreen");
  }

  return (
    <Flex flex={1} justify="center">
      <Box display="flex" alignItems="center">
        <Heading>Guess My Number</Heading>
        <Input
          placeholder="Enter a number"
          maxLength={2}
          keyboardType="number-pad"
          size="2xl"
          variant="underlined"
          textAlign="center"
          w="50%"
          pb={4}
          value={enteredValue}
          onChangeText={inputChangeHandler}
        />
        <Flex w="80%" direction="row" justify="space-between" my={10}>
          <Button size="lg" w={120} borderRadius={100} onPress={resetHandler}>
            Reset
          </Button>
          <Button
            size="lg"
            w={120}
            borderRadius={100}
            onPress={confirmInputHandler}
          >
            Let's play!
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default StartGameScreen;
