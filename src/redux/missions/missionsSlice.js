import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('missions/fetchData', async () => {
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

const missionsReducer = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMissionReserved: (state, action) => {
      const missionId = action.payload;
      const newData = state.data.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
      return { ...state, data: newData };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const dataWithReserved = action.payload.map((mission) => ({
        ...mission,
        reserved: false,
      }));
      return { ...state, data: dataWithReserved, status: 'fulfilled' };
    });
  },
});

export const { toggleMissionReserved } = missionsReducer.actions;
export default missionsReducer.reducer;
