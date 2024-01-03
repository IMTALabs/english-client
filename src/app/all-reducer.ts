import {combineReducers} from '@reduxjs/toolkit';

import headerSlice from 'src/features/common/header-slice';
import listeningSlice from 'src/features/common/listening-slice';
import modalSlice from 'src/features/common/modal-slice';
import rightDrawerSlice from 'src/features/common/right-drawer-slice';

export const allReducer = combineReducers({
  header: headerSlice,
  modal: modalSlice,
  rightDrawer: rightDrawerSlice,
  listening : listeningSlice ,
});
