import React from "react";
import { Alert } from "react-native";
import { Text, Heading, Box, Flex, Button } from "native-base";

import { useAppSelector } from "../app/hooks";

function generateRandomNum(min: number, max: number, exclude?: number): number {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return rndNumber;
  }
}

let minNumber = 1;
let maxNumber = 100;

const GameScreen: React.FC = () => {
  const userInput = useAppSelector((state) => state.userInput)!;

  const initialGuess = generateRandomNum(minNumber, maxNumber, userInput);
  const [currentGuess, setCurrentGuess] = React.useState<number>(initialGuess);

  function guessNewNumberHandler(direction: string): number | undefined {
    if (
      (direction === "lower" && currentGuess < userInput) ||
      (direction === "higher" && currentGuess > userInput)
    ) {
      Alert.alert("Don't lie, I am a computer");
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    }
    if (direction === "higher") {
      minNumber = currentGuess + 1;
    }

    setCurrentGuess(generateRandomNum(minNumber, maxNumber));
  }

  return (
    <Flex flex={1} justify="center" align="center">
      <Heading>Opponent's Guess</Heading>
      <Box>
        <Text>{currentGuess}</Text>
      </Box>
      <Box>
        <Text>Higher or lower?</Text>
        <Flex direction="row" justify="space-between">
          <Button size="lg" onPress={guessNewNumberHandler.bind(this, "lower")}>
            -
          </Button>
          <Button
            size="lg"
            onPress={guessNewNumberHandler.bind(this, "higher")}
          >
            +
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default GameScreen;
