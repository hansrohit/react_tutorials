import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudents(state, action) {
      state.push(action.payload);
    },
    deleteStudent(state, action) {
      return state.filter((val, id) => action.payload !== id);
    },
  },
});

export const { addStudents, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
