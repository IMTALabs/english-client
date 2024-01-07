import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reading from 'src/features/services/reading/reading-api';



interface ToppicState {
    mode: string
    topic: string
    paragraph: string
}

export const postReadingContent = createAsyncThunk(
    'reading/postReadingContent',
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
    name: 'reading',
    initialState: initialState,
    reducers: {
        clearReadingState: () => {
            return initialState;
        },
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

export const { clearReadingState } = readingSlice.actions;

export default readingSlice.reducer;
