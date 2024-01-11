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
            return response;
        } catch (error: any) {
            return rejectWithValue({ error: error.message });
        }
    }
);

export interface ReadingInterface {
    body?: Body
    hash?: string
}

export interface Body {
    id?: string
    form?: Form[]
    paragraph?: string
}

export interface Form {
    question?: string
    choices?: Choices
    explanation?: string
    answer?: string
}

export interface Choices {
    A?: string
    B?: string
    C?: string
    D?: string
}


interface ReadingState {
    isLoading?: boolean;
    readingQuizz?: ReadingInterface;
}

const initialState: ReadingState = {
    isLoading: false,
    readingQuizz: {},
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
                state.readingQuizz = action.payload;
            })
            .addCase(postReadingContent.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection if needed
            })
    },
});

export const { clearReadingState } = readingSlice.actions;

export default readingSlice.reducer;
