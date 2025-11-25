//не рабочий файл
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../Lesson10UrlComponent/api/api";

const fetchUsers = createAsyncThunk("users/fetchByIdStatus", getAllUsers);

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejectrd, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
