import {createSlice} from '@reduxjs/toolkit';

type historyState = {
  created_at: string;
  id: number;
  skill: string;
};

type initialState = {
  history: historyState[];
};

const initialState: initialState = {
  history: [],
};

export const listeningSlice = createSlice({
  name: 'history',
  initialState: initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const {setHistory} = listeningSlice.actions;

export default listeningSlice.reducer;
