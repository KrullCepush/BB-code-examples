import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchListGet, TypeCreateFetch } from 'configs/apiTemplates/apiGet';
import axios from 'configs/Axios';
import { TypePaySystemLimit } from '../../types';

interface TOptionsQuery {
  url: string;
  value: TypePaySystemLimit[];
}

export const actionFetchPaySystemLimits = createAsyncThunk(
  'paySystemLimits/fetchPaySystemLimits',
  async (optionsQuery: TypeCreateFetch, { rejectWithValue }) =>
    apiFetchListGet(optionsQuery, rejectWithValue),
);

export const actionUpdatePaySystemLimits = createAsyncThunk(
  'paySystemLimits/UpdatePaySystemLimits',
  async (optionsQuery: TOptionsQuery, { rejectWithValue }) => {
    const { url, value } = optionsQuery;

    try {
      await Promise.all(
        value.map((element) =>
          axios.put(url, {
            paySystemId: element.paySystemId,
            currencyCode: element.currencyCode,
            paySystemKindId: element.paySystemKindId,
            dailyPayOutLimit: element.dailyPayOutLimit
              ? Number(element.dailyPayOutLimit)
              : element.dailyPayOutLimit,
          }),
        ),
      );

      return {
        isUpdateTable: true,
      };
    } catch (error) {
      throw rejectWithValue({
        errorMessage: error,
      });
    }
  },
);
