import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import writing from 'src/features/services/writing/writing-api';








interface ToppicState {
    instruction: string
    submission: string,
    band_score?: number
}
interface WritingState {
    writingQuizz: WritingPros;
}

export interface WritingPros {
    body?: string
    hash?: string
}


const initialState: WritingState = {
    writingQuizz: {},
};

export const writingSlice = createSlice({
    name: 'writing',
    initialState: initialState,
    reducers: {
        clearWritingState: () => {
            return initialState;
        },
        postReadingState: (state, action) => {
            state.writingQuizz = action.payload
        }
    }
});

export const { clearWritingState, postReadingState } = writingSlice.actions;

export default writingSlice.reducer;
