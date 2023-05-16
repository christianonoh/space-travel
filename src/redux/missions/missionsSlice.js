import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('missions/fetchData', async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.spacexdata.com/v3/missions/',
    headers: { },
  };
  const response = await axios.request(config);
  if (response.data) {
    return response.data;
  }
  return [];
});

const initialState = [];

const missionsReducer = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const dataWithStatus = action.payload.map((mission) => ({
        ...mission,
        status: false,
      }));
      return dataWithStatus;
    });
  },
});

export default missionsReducer.reducer;
