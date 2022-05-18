import { Text, Heading, Box, Flex, Button } from "native-base";
import React from "react";

import { useAppNavigation } from "../hooks/navigationHooks";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { resetGame } from "../app/mainSlice";

const GameOverScreen: React.FC = () => {
  const guessArr = useAppSelector((state) => state.guessArr);
  const userInput = useAppSelector((state) => state.userInput);
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  function startNewGameHandler(): void {
    dispatch(resetGame());
    navigation.navigate("StartGameScreen");
  }

  return (
    <Flex flex={1} justify="center" align="center">
      <Heading>Game Over!</Heading>
      <Box>
        <Text>Your phone needed {guessArr.length} rounds</Text>
        <Text>to guess your chosen number: {userInput}</Text>
      </Box>
      <Button onPress={startNewGameHandler}>New game</Button>
    </Flex>
  );
};

export default GameOverScreen;
