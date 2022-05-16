import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  userInput: number | null;
  computerGuess: number | null;
}

export const initialState: MainState = {
  userInput: null,
  computerGuess: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    confirmUserInput: (state, action: PayloadAction<number>) => {
      state.userInput = action.payload;
    },
    confirmComputerGuess: (state, action: PayloadAction<number>) => {
      state.computerGuess = action.payload;
    },
  },
});

export const { confirmUserInput, confirmComputerGuess } = mainSlice.actions;
export default mainSlice.reducer;
