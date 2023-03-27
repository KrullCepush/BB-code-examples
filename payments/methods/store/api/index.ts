import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchListGet, TypeCreateFetch } from 'configs/apiTemplates/apiGet';
import {
  apiFetchDelete,
  TypeCreateFetchDeleteParams,
} from 'configs/apiTemplates/apiDelete';
import {
  apiFetchPut,
  TypeCreateFetchPutParams,
} from 'configs/apiTemplates/apiPut';

export const actionFetchPaymentsMethods = createAsyncThunk(
  'paymentsMethods/fetchPaymentsMethods',
  async (optionsQuery: TypeCreateFetch, { rejectWithValue }) =>
    apiFetchListGet(optionsQuery, rejectWithValue),
);

export const actionFetchUpdateDefaultPayments = createAsyncThunk(
  'paymentsMethods/fetchUpdateDefaultPayment',
  async (optionsQuery: TypeCreateFetchPutParams, { rejectWithValue }) =>
    apiFetchPut(optionsQuery, rejectWithValue),
);

export const actionFetchDeletePayment = createAsyncThunk(
  'paymentsMethods/fetchDeletePayment',
  async (optionsQuery: TypeCreateFetchDeleteParams, { rejectWithValue }) =>
    apiFetchDelete(optionsQuery, rejectWithValue),
);
