import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reading from 'src/features/services/reading/reading-api';



interface ToppicState {
    mode: string
    topic: string
    paragraph: string
}

export const postReadingContent = createAsyncThunk(
    'writing/postReadingContent',
    async (toppic: ToppicState, { rejectWithValue }) => {
        try {
            const response = await reading.postTopicReading(toppic)
            return response.data;
        } catch (error: any) {
            return rejectWithValue({ error: error.message });
        }
    }
);



interface ReadingState {
    isLoading: boolean;
    quizzs: ToppicState[];
}

const initialState: ReadingState = {
    isLoading: false,
    quizzs: [],
};

export const readingSlice = createSlice({
    name: 'writing',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(postReadingContent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postReadingContent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizzs = action.payload;
            })
            .addCase(postReadingContent.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection if needed
            })
    },
});

export const { } = readingSlice.actions;

export default readingSlice.reducer;
