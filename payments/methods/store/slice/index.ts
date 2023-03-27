import { createSlice } from '@reduxjs/toolkit';

import { extraReducerPaymentsMethods } from '../reducers';
import { TypePaymentsMethodsInitialReducer } from '../../types';

const initialState: TypePaymentsMethodsInitialReducer = {
  isFetch: false,
  isError: false,
  isErrorPut: false,
  errorMessagePut: null,
  errorMessage: null,
  payCards: null,
};

const paymentsMethodsSlice = createSlice({
  name: 'paymentsMethods',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    extraReducerPaymentsMethods(builder);
  },
});

export const paymentsMethodsReducer = paymentsMethodsSlice.reducer;
