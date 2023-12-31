import {createSlice} from '@reduxjs/toolkit';


interface RightDrawerState { 
    header?: string;
    isOpen?: boolean;
    bodyType?: string;
    extraObject?: any;
}

const initialState: RightDrawerState = { 
    header: '',
    isOpen: false,
    bodyType: '',
    extraObject: {},
};




export const rightDrawerSlice = createSlice({
  name: 'rightDrawer',
  initialState: initialState,
  reducers: {
    openRightDrawer: (state, action) => {
      const {header, bodyType, extraObject} = action.payload;
      state.isOpen = true;
      state.bodyType = bodyType;
      state.header = header;
      state.extraObject = extraObject;
    },

    closeRightDrawer: (state, action) => {
      state.isOpen = false;
      state.bodyType = '';
      state.header = '';
      state.extraObject = {};
    },
  },
});

export const {openRightDrawer, closeRightDrawer} = rightDrawerSlice.actions;

export default rightDrawerSlice.reducer;
