import {
  actionFetchPaySystemLimits,
  actionUpdatePaySystemLimits,
} from '../api';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { TypePaySystemLimitsState } from '../../types';

export const extraReducerPaySystemLimits = (
  builder: ActionReducerMapBuilder<TypePaySystemLimitsState>,
) => {
  builder.addCase(
    actionUpdatePaySystemLimits.fulfilled,
    (state: TypePaySystemLimitsState, { payload }: any) => {
      state.isUpdateTable = payload.isUpdateTable;
      return state;
    },
  );

  builder.addCase(
    actionUpdatePaySystemLimits.rejected,
    (state: TypePaySystemLimitsState, { payload }: any) => {
      return state;
    },
  );

  builder.addCase(
    actionFetchPaySystemLimits.pending,
    (state: TypePaySystemLimitsState) => ({
      ...state,
      isUpdateTable: false,
      isFetchRequest: true,
      isErrorRequest: false,
      errorMessage: null,
      limits: [],
    }),
  );

  builder.addCase(
    actionFetchPaySystemLimits.fulfilled,
    (state: TypePaySystemLimitsState, { payload }: any) => {
      const responseData = payload.response?.data;

      state.errorMessage = null;
      state.isFetchRequest = false;
      state.isErrorRequest = false;

      state.limits = responseData;

      return state;
    },
  );

  builder.addCase(
    actionFetchPaySystemLimits.rejected,
    (state: TypePaySystemLimitsState, { payload }: any) => ({
      ...state,
      isFetchRequest: false,
      isErrorRequest: true,
      errorMessage: payload?.errorMessage || '',
      limits: [],
    }),
  );
};
