import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import writing from 'src/features/services/writing/writing-api';





export const postWritingPoint = createAsyncThunk(
    'writing/postWritingPoint',
    async (toppic: ToppicState, { rejectWithValue }) => {
        try {
            const response = await writing.postInstructionApi(toppic)
            return response.data;
        } catch (error: any) {
            return rejectWithValue({ error: error.message });
        }
    }
);

export const postWritingContent = createAsyncThunk(
    'writing/postWritingContent',
    async (toppic: string, { rejectWithValue }) => {
        try {
            const response = await writing.postGenInstructionApi(toppic)
            return response.data;
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
    isLoading: boolean;
    quizzs: ToppicState[];
}

const initialState: WritingState = {
    isLoading: false,
    quizzs: [],
};

export const writingSlice = createSlice({
    name: 'writing',
    initialState: initialState,
    reducers: {
        clearWritingState: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postWritingPoint.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postWritingPoint.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizzs = action.payload;
            })
            .addCase(postWritingPoint.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection if needed
            })
            .addCase(postWritingContent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postWritingContent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizzs = action.payload;
            })
            .addCase(postWritingContent.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection if needed
            });
    },
});

export const { clearWritingState } = writingSlice.actions;

export default writingSlice.reducer;
