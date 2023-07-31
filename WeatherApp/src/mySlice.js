import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  listType: "all",
};

const mySlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      let favorite = {
        text: action.payload,
        id: crypto.randomUUID(),
      };
      state.list.push(favorite);
    },

    removeLocation: (state, action) => {
      let index = state.list.findIndex(
        (favorite) => favorite.id === action.payload
      );

      state.list.splice(index, 1);
    },

    changeListType: (state, action) => {
      state.listType = action.payload;
    },
  },
});
export default mySlice.reducer;
export const { addLocation, removeLocation, changeListType } = mySlice.actions;
