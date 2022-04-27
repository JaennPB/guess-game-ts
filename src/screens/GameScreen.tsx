import { Text, View } from "react-native";
import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";
import type { StackParams } from "../../App";

interface Props {}

const GameScreen: React.FC<Props> = (props: Props) => {
  const route = useRoute<RouteProp<StackParams, "GameScreen">>();
  const userNumber = route.params.userNumber;

  return (
    <View>
      <Text>GameScreen {userNumber}</Text>
    </View>
  );
};

export default GameScreen;
