import { useNavigation } from "@react-navigation/native";
import type { GameScreenProp } from "../../App";

export const useAppNavigation = () => useNavigation<GameScreenProp>();
