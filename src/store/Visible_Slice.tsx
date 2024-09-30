import { createSlice } from '@reduxjs/toolkit';

const visibleSlice = createSlice({
  name: 'visible',
  initialState: { isVisible: false },
  reducers: {
    setVisible: state => {
      state.isVisible = true;
    },
    setHidden: state => {
      state.isVisible = false;
    },
  },
});

// Export actions
export const { setVisible, setHidden } = visibleSlice.actions;

// Export the reducer
export default visibleSlice.reducer;
