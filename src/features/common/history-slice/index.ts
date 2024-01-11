import { createSlice } from '@reduxjs/toolkit';



const initialState: any = {
    isLoading: false,
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

export const { setHistory } = listeningSlice.actions;

export default listeningSlice.reducer;
