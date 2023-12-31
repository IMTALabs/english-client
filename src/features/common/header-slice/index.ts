import { createSlice } from "@reduxjs/toolkit";


interface HeaderState {
    pageTitle: string;
    noOfNotifications: number;
    newNotificationMessage: string;
    newNotificationStatus: number;
}

interface HeaderAction {
    type: string;
    payload: any;
}


const initialState: HeaderState = {
    pageTitle: "Home",
    noOfNotifications: 15,
    newNotificationMessage: "",
    newNotificationStatus: 1,
};




export const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload.title;
    },

    removeNotificationMessage: (state, action: HeaderAction
        ) => {
      state.newNotificationMessage = "";
    },

    showNotification: (state, action) => {
      state.newNotificationMessage = action.payload.message;
      state.newNotificationStatus = action.payload.status;
    },
  },
});

export const { setPageTitle, removeNotificationMessage, showNotification } =
  headerSlice.actions;

export default headerSlice.reducer;
