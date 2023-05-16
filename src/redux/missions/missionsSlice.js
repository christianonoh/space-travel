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

const initialState = [
  {
    mission_id: 1,
    mission_name: 'Mission 1',
    description: 'The young boy, who had always been fascinated by the stars, looked up at the night sky with wonder. He had been dreaming of this moment for as long as he could remember, and now that he was finally here, he couldn\'t believe his eyes. The stars were so bright and beautiful, and he felt like he could reach out and touch them. He spent the next few hours lying on his back, gazing up at the heavens, and he knew that this was a moment that he would never forget.',
    status: false,
  },
  {
    mission_id: 2,
    mission_name: 'Mission 2',
    description: 'The young boy, who had always been fascinated by the stars, looked up at the night sky with wonder. He had been dreaming of this moment for as long as he could remember, and now that he was finally here, he couldn\'t believe his eyes. The stars were so bright and beautiful, and he felt like he could reach out and touch them. He spent the next few hours lying on his back, gazing up at the heavens, and he knew that this was a moment that he would never forget.',
    status: true,
  },
  {
    mission_id: 3,
    mission_name: 'Mission 3',
    description: 'Description for Mission 3',
    status: false,
  },
];

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
