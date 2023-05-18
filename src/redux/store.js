import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './slicers/missionsSlice';
import rocketReducer from './slicers/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;
