import { createSlice } from '@reduxjs/toolkit';



interface ListeningState {
    isLoading: boolean;
    listeningQuizz: Root; // Use null as the initial value
    error: string
}




const initialState: ListeningState = {
    isLoading: false,
    listeningQuizz: {},
    error: ''
};

export interface Root {
    body?: Body
    link?: string
    hash?: string
}

export interface Body {
    id: string
    form: Form[]
}

export interface Form {
    question: string
    choices: Choices
    explanation: string
    answer: string
}

export interface Choices {
    A: string
    B: string
    C: string
    D: string
}

export const listeningSlice = createSlice({
    name: 'listening',
    initialState: initialState,
    reducers: {
        clearListeningState: (state) => {
            return initialState;
        },
        setListeningState: (state, action) => {
            state.listeningQuizz = action.payload;
        },
        setErrorListeningState: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const { clearListeningState, setListeningState, setErrorListeningState } = listeningSlice.actions;

export default listeningSlice.reducer;
