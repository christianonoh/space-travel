import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRocketData = createAsyncThunk('missions/fetchData', async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.spacexdata.com/v3/missions/',
    headers: {},
  };
  const response = await axios.request(config);
  if (response.data) {
    return response.data;
  }
  return [];
});

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const rocketReducer = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    toggleRocketReserved: (state, action) => {
      const rocketId = action.payload;
      const newData = state.data.map((rocket) => {
        if (rocket.id !== rocketId) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      return { ...state, data: newData };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRocketData.fulfilled, (state, action) => {
      const dataWithReserved = action.payload.map((mission) => ({
        ...mission,
        reserved: false,
      }));
      return { ...state, data: dataWithReserved, status: 'fulfilled' };
    });
  },
});

export const { toggleRocketReserved } = rocketReducer.actions;
export default rocketReducer.reducer;
