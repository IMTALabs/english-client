import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import writing from 'src/features/services/writing/writing-api';





export const postWritingPoint = createAsyncThunk(
    'writing/postWritingPoint',
    async (toppic: ToppicState, { rejectWithValue }) => {
        try {
            const response = await writing.postInstructionApi(toppic)
            return response;
        } catch (error: any) {
            return rejectWithValue({ error: error.message });
        }
    }
);



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
    },
    extraReducers: (builder) => {
        builder
            .addCase(postWritingPoint.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postWritingPoint.fulfilled, (state, action) => {
                state.isLoading = false;
                state.writingQuizz = action.payload;
            })
            .addCase(postWritingPoint.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection if needed
            })

    },
});

export const { clearWritingState, postReadingState } = writingSlice.actions;

export default writingSlice.reducer;
