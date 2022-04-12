import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  userInput: string;
}

export const initialState: MainState = {
  userInput: "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    confirmUserInput: (state, action: PayloadAction<string>) => {
      state.userInput = action.payload;
    },
  },
});

export const { confirmUserInput } = mainSlice.actions;
export default mainSlice.reducer;
