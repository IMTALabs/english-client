import { combineReducers } from '@reduxjs/toolkit';

import headerSlice from 'src/features/common/header-slice';
import listeningSlice from 'src/features/common/listening-slice';
import modalSlice from 'src/features/common/modal-slice';
import readingSlice from 'src/features/common/reading-slice';
import rightDrawerSlice from 'src/features/common/right-drawer-slice';
import userSlice from 'src/features/common/user-slice';
import writingSlice from 'src/features/common/writing-slice';

export const allReducer = combineReducers({
  header: headerSlice,
  modal: modalSlice,
  rightDrawer: rightDrawerSlice,
  listening: listeningSlice,
  writing: writingSlice,
  reading: readingSlice,
  user: userSlice
});
