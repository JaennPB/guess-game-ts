import { Box, Flex, Input, Button } from "native-base";

interface Props {}

const StartGameScreen: React.FC<Props> = (props: Props) => {
  return (
    <Box>
      <Input placeholder="Number" />
      <Flex direction="row" justify="space-between" my={5}>
        <Button size="lg" w={120}>
          Reset
        </Button>
        <Button size="lg" w={120}>
          Confirm
        </Button>
      </Flex>
    </Box>
  );
};

export default StartGameScreen;
