import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import listeningApi from 'src/features/services/listening/listeningApi';

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
    quizzs: any[];
}

const initialState: ListeningState = {
    isLoading: false,
    quizzs: [],
};

export const listeningSlice = createSlice({
    name: 'listening',
    initialState: initialState,
    reducers: {

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

export const { } = listeningSlice.actions;

export default listeningSlice.reducer;
