import { createSlice } from '@reduxjs/toolkit';

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
    error?: string
}

const initialState: ReadingState = {
    isLoading: false,
    readingQuizz: {},
    error: ''
};




export const readingSlice = createSlice({
    name: 'reading',
    initialState: initialState,
    reducers: {
        clearReadingState: () => {
            return initialState;
        },
        setReadingState: (state, action) => {
            state.readingQuizz = action.payload
        },
        setErrorReadingState: (state, action) => {
            state.error = action.payload
        }
    }
});

export const { clearReadingState, setReadingState, setErrorReadingState } = readingSlice.actions;

export default readingSlice.reducer;
