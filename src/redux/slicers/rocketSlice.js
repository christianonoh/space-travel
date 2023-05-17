import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const rocketsURL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketData = createAsyncThunk(
  'rockets/fetchRocketData', () => {
    return fetch(rocketsURL)
  },
);

const initialState = {
  availableRockets: [], // Set initial value to an empty array
  reservedRockets: [],
};

const rocketSlice = createSlice({
  name: 'reservedRocket',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRocketData.fulfilled, (state, action) => {
      const updatedState = {
        ...state,
        availableRockets: action.payload,
      };
      return updatedState;
    });
  },
});

export default rocketSlice.reducer;
