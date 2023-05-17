import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './slicers/missionsSlice';
import rocketSlice from './slicers/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketSlice,
  },
});

export default store;
