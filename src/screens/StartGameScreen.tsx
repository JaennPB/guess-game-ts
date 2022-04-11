import { Box, Flex, Input, Button } from "native-base";

interface Props {}

const StartGameScreen: React.FC<Props> = (props: Props) => {
  function resetHandler(): void {
    console.log("reset");
  }

  function confirmHandler(): void {
    console.log("confirm");
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
      />
      <Flex w="80%" direction="row" justify="space-between" my={10}>
        <Button size="lg" w={120} borderRadius={100} onPress={resetHandler}>
          Reset
        </Button>
        <Button size="lg" w={120} borderRadius={100} onPress={confirmHandler}>
          Confirm
        </Button>
      </Flex>
    </Box>
  );
};

export default StartGameScreen;
