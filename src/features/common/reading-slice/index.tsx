import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reading from 'src/features/services/reading';



interface ToppicState {
    mode: string
    topic: string
    paragraph: string
}

export const postReadingConten = createAsyncThunk(
    'writing/postReadingConten',
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
            .addCase(postReadingConten.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postReadingConten.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizzs = action.payload;
            })
            .addCase(postReadingConten.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection if needed
            })
    },
});

export const { } = readingSlice.actions;

export default readingSlice.reducer;
