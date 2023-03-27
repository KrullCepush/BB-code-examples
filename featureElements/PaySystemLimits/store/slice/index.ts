import { createSlice } from '@reduxjs/toolkit';
import { extraReducerPaySystemLimits } from '../reducers';
import { TypePaySystemLimitsState } from '../../types';

const initialState: TypePaySystemLimitsState = {
  isFetchRequest: false,
  isErrorRequest: false,
  errorMessage: null,
  isUpdateTable: false,
  limits: [],
};

const paySystemLimitsSlice = createSlice({
  name: 'paySystemLimits',
  initialState,
  reducers: {
    resetPaySystemLimits() {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    extraReducerPaySystemLimits(builder);
  },
});

export const paySystemLimitsReducer = paySystemLimitsSlice.reducer;
export const { resetPaySystemLimits } = paySystemLimitsSlice.actions;
