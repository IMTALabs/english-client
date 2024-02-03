import { createSlice } from '@reduxjs/toolkit';

type historyState = {
  created_at: string;
  id: number;
  skill: string;
};

export type recommendedVideo = {
  videoLink: string;
  title: string;
  description: string;
  thumbnails: string;
  duration: string
};



type initialState = {
  history: historyState[];
  youtubeRecommened: recommendedVideo[];
};

const initialState: initialState = {
  history: [],
  youtubeRecommened: [],
  suggestReadings : []
};

export const listeningSlice = createSlice({
  name: 'history',
  initialState: initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setRecommended: (state, action) => {
      state.youtubeRecommened = action.payload;
    },
    setSuggestReadings: (state, action) => {
      state.suggestReadings = action.payload;
    }
  },
});

export const { setHistory, setRecommended } = listeningSlice.actions;

export default listeningSlice.reducer;
