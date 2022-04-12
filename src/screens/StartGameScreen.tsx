import { useState } from "react";
import { Box, Flex, Input, Button } from "native-base";
import { Alert } from "react-native";

import { useAppDispatch } from "../app/hooks";
import { confirmUserInput } from "../app/mainSlice";

interface Props {}

const StartGameScreen: React.FC<Props> = (props: Props) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const dispatch = useAppDispatch();

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
        { text: "Got it!", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    dispatch(confirmUserInput(enteredValue));
  }

  return (
    <Box display="flex" alignItems="center">
      <Input
        placeholder="Guess my number"
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
          Confirm
        </Button>
      </Flex>
    </Box>
  );
};

export default StartGameScreen;
