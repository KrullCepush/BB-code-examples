import { ActionReducerMapBuilder, AnyAction, current } from '@reduxjs/toolkit';
import { TypePaymentsMethodsInitialReducer } from '../../types';
import {
  actionFetchDeletePayment,
  actionFetchPaymentsMethods,
  actionFetchUpdateDefaultPayments,
} from '../api';

export const extraReducerPaymentsMethods = (
  builder: ActionReducerMapBuilder<TypePaymentsMethodsInitialReducer>,
) => {
  builder.addCase(
    actionFetchPaymentsMethods.pending,
    (state: TypePaymentsMethodsInitialReducer) => ({
      ...state,
      isFetch: true,
      isError: false,
      errorMessage: null,
    }),
  );
  builder.addCase(
    actionFetchPaymentsMethods.fulfilled,
    (state: TypePaymentsMethodsInitialReducer, { payload }: AnyAction) => ({
      ...state,
      isFetch: false,
      isError: false,
      errorMessage: null,
      payCards: payload?.response?.data?.payCards || null,
    }),
  );
  builder.addCase(
    actionFetchPaymentsMethods.rejected,
    (state: TypePaymentsMethodsInitialReducer, { payload }: AnyAction) => ({
      ...state,
      isFetch: false,
      isError: true,
      errorMessage: payload?.errorMessage || 'непредвиденная ошибка',
    }),
  );
  builder.addCase(
    actionFetchUpdateDefaultPayments.rejected,
    (state: TypePaymentsMethodsInitialReducer, { payload }: AnyAction) => ({
      ...state,
      isFetch: false,
      isErrorPut: true,
      errorMessagePut: payload?.errorMessage,
    }),
  );
  builder.addCase(
    actionFetchUpdateDefaultPayments.pending,
    (state: TypePaymentsMethodsInitialReducer) => ({
      ...state,
      isFetch: true,
      isErrorPut: false,
      errorMessagePut: null,
    }),
  );
  builder.addCase(
    actionFetchUpdateDefaultPayments.fulfilled,
    (state: TypePaymentsMethodsInitialReducer, { payload }: AnyAction) => {
      const updatePayment = payload?.response?.data?.payCards || [];

      return {
        ...state,
        isFetch: false,
        isErrorPut: false,
        errorMessagePut: null,
        payCards: updatePayment,
      };
    },
  );
  builder.addCase(
    actionFetchDeletePayment.pending,
    (state: TypePaymentsMethodsInitialReducer) => ({
      ...state,
      isFetch: true,
      isErrorPut: false,
      errorMessagePut: null,
    }),
  );
  builder.addCase(
    actionFetchDeletePayment.rejected,
    (state: TypePaymentsMethodsInitialReducer, { payload }: AnyAction) => ({
      ...state,
      isFetch: false,
      isErrorPut: true,
      errorMessagePut: payload?.errorMessage,
    }),
  );
  builder.addCase(
    actionFetchDeletePayment.fulfilled,
    (state: TypePaymentsMethodsInitialReducer, { payload }: AnyAction) => {
      const currentState = current(state);
      const updatePayments = Array.isArray(currentState.payCards)
        ? currentState.payCards.filter(
            (payCard) =>
              String(payCard.payCardId) !==
              String(payload?.response?.data?.payCardId),
          )
        : [];

      return {
        ...state,
        payCards: updatePayments,
        isFetch: false,
        isErrorPut: false,
        errorMessagePut: null,
      };
    },
  );
};
