import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  userInput: number | null;
  guessArr: number[];
}

export const initialState: MainState = {
  userInput: null,
  guessArr: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    confirmUserInput: (state, action: PayloadAction<number>) => {
      state.userInput = action.payload;
    },
    logGuesses: (state, action: PayloadAction<number>) => {
      state.guessArr.unshift(action.payload);
    },
    resetGame: (state) => {
      state.userInput = null;
      state.guessArr = [];
    },
  },
});

export const { confirmUserInput, logGuesses, resetGame } = mainSlice.actions;
export default mainSlice.reducer;
