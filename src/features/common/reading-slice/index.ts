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
    readingQuizz?: ReadingInterface;
    suggest: suggestState[]
}
export interface suggestState {
    id: number
    topic: string
}

const initialState: ReadingState = {
    readingQuizz: {},
    suggest: []
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
        setSuggestReading: (state, action) => {
            state.suggest = action.payload
        }
    }
});

export const { clearReadingState, setReadingState, setSuggestReading } = readingSlice.actions;

export default readingSlice.reducer;
