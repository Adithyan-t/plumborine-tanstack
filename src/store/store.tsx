import { configureStore } from '@reduxjs/toolkit';
import visibleSlice from '../store/Visible_Slice';

const store = configureStore({
  reducer: {
    visible: visibleSlice,
  },
});

export default store;
