import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 5,
  },
  reducers: {
    add: (state) => {
      state.value += 1; // Increment the value
    },
  },
});

export const { add } = slice.actions;
export default slice.reducer;