import React from "react";
import { Alert, ListRenderItemInfo } from "react-native";
import {
  Text,
  Heading,
  Box,
  Flex,
  Button,
  FlatList,
  Center,
} from "native-base";

import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { useAppNavigation } from "../hooks/navigationHooks";
import { logGuesses } from "../app/mainSlice";

import { Ionicons } from "@expo/vector-icons";

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
  const guessArr = useAppSelector((state) => state.guessArr);
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const [currentGuess, setCurrentGuess] = React.useState<number>(
    generateRandomNum(1, 100, userInput)
  );

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

  function renderGuessCardHandler(
    itemData: ListRenderItemInfo<number>
  ): JSX.Element {
    return <Text>{itemData.item}</Text>;
  }

  React.useEffect(() => {
    dispatch(logGuesses(currentGuess));

    if (currentGuess === userInput) {
      navigation.navigate("GameOverScreen");
      minNumber = 1;
      maxNumber = 100;
    }
  }, [currentGuess, userInput]);

  return (
    <>
      <Flex flex={1} justify="center" align="center">
        <Heading>Opponent's Guess</Heading>
        <Box>
          <Text>{currentGuess}</Text>
        </Box>
        <Text>Higher or lower?</Text>
        <Flex direction="row" justify="space-between">
          <Button size="lg" onPress={guessNewNumberHandler.bind(this, "lower")}>
            <Ionicons name="caret-down-outline" size={24} color="white" />
          </Button>
          <Button
            size="lg"
            onPress={guessNewNumberHandler.bind(this, "higher")}
          >
            <Ionicons name="caret-up-outline" size={24} color="white" />
          </Button>
        </Flex>
      </Flex>
      <FlatList
        data={guessArr}
        renderItem={renderGuessCardHandler}
        keyExtractor={(item) => item.toString()}
      />
    </>
  );
};

export default GameScreen;
