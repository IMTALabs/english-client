import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import listeningApi from 'src/features/services/listening/listening-api';

export const getListeningContent = createAsyncThunk(
    'listening/getListeningContent',
    async (listen_link: string, { rejectWithValue }) => {
        try {
            const response = await listeningApi.postYoutubeLink(listen_link)
            return response.data;
        } catch (error: any) {
            return rejectWithValue({ error: error.message });
        }
    }
);

interface ListeningState {
    isLoading: boolean;
    quizzs: Root | null; // Use null as the initial value
}

const initialState: ListeningState = {
    isLoading: false,
    quizzs: null,
};

export interface Root {
    body: Body;
    link: string;
}

export interface Body {
    id: string;
    form: Form[];
}

export interface Form {
    question: string;
    choices: Choices;
    explanation: string;
    answer: string;
}

export interface Choices {
    A: string;
    B: string;
    C: string;
    D: string;
}
export const listeningSlice = createSlice({
    name: 'listening',
    initialState: initialState,
    reducers: {
        clearListeningState: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListeningContent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getListeningContent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizzs = action.payload;
            })
            .addCase(getListeningContent.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection if needed
            });
    },
});

export const { clearListeningState } = listeningSlice.actions;

export default listeningSlice.reducer;
