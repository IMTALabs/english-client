import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import writing from 'src/features/services/writing/writing-api';
import { suggestState } from '../reading-slice';








interface ToppicState {
    instruction: string
    submission: string,
    band_score?: number
}
interface WritingState {
    writingQuizz: WritingPros;
    suggest: suggestState[];
}

export interface WritingPros {
    body?: string
    hash?: string
}


const initialState: WritingState = {
    writingQuizz: {},
    suggest: []
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
        },
        setSuggestWriting: (state, action) => {
            state.suggest = action.payload
        }
    }
});

export const { clearWritingState, postReadingState, setSuggestWriting } = writingSlice.actions;

export default writingSlice.reducer;
