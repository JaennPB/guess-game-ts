import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  userInput: string | null;
}

export const initialState: MainState = {
  userInput: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
