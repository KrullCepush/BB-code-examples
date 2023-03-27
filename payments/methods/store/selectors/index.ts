import { rootReducerType } from 'store/rootReducer';
import { TypePaymentsMethodsInitialReducer } from '../../types';

export const selectorPaymentsMethods = (
  state: rootReducerType,
): TypePaymentsMethodsInitialReducer => state.paymentsMethods;
