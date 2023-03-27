type ID = string | number;

export interface TypePaySystemLimit {
  gamblerId: ID;
  config?: unknown;
  countryCode: number;
  currencyAlpha3: string;
  currencyCode: number;
  currencyLabel: string;
  currencySymbol?: string;
  dailyPayOutLimit: null | number;
  gamblerPaySystemConfig: unknown;
  paySystemCountryId: ID;
  paySystemGroupId: ID;
  paySystemGroupLabel: string;
  paySystemId: ID;
  paySystemKindId: ID;
  paySystemKindLabel: string;
  paySystemLabel: string;
}

export interface TypePaySystemLimitsState {
  isFetchRequest: boolean;
  isErrorRequest: boolean;
  errorMessage: null | string;
  isUpdateTable: boolean;
  limits: TypePaySystemLimit[];
}
