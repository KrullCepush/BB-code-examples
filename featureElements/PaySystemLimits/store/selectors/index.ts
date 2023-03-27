import { rootReducerType } from 'store/rootReducer';
import { TypePaySystemLimitsState } from '../../types';

export const selectorPaySystemLimits = (
  state: rootReducerType,
): TypePaySystemLimitsState => state.paySystemLimits;
