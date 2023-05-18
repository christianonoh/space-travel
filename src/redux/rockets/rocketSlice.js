import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchData', async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.spacexdata.com/v4/rockets',
    headers: {},
  };
  const response = await axios.request(config);
  if (response.data) {
    return response.data;
  }
  return [];
});

const initialState = {
  rockets: [],
  reservedRockets: [],
  status: 'idle',
  loading: false,
  error: null,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    toggleReserveRocket: (state, action) => {
      const rocketID = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketID) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
      const updatedReservedRockets = updatedRockets
        .filter((rocket) => rocket.reserved)
        .map((rocket) => rocket.id);
      return {
        ...state,
        rockets: updatedRockets,
        reservedRockets: updatedReservedRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rocketsWithReserved = action.payload.map((rocket) => ({
        ...rocket,
        reserved: false,
      }));
      return { ...state, rockets: rocketsWithReserved, status: 'fulfilled' };
    });
  },
});

export const { toggleReserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
