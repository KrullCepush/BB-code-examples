export type TypePayCardState = 'disabled' | 'enabled' | 'unverified';
export interface TypeExtendsData {
  firstName: string;
  lastName: string;
  birthDate: string;
  country?: any;
  documents?: any;
}

export interface TypePayCard {
  paySystemLabel: string;
  createDatetime: string;
  paySystemId: number;
  payCardId: string;
  default: boolean;
  state: TypePayCardState;
  cardLabel: string;
  paymentPhone?: string;
  extendsData?: TypeExtendsData;
  paymentId?: string;
  holder?: string;
  token?: string;
  mask?: string;
}

export type TypePayCardsList = TypePayCard[] | null;

export interface TypePaymentsMethodsInitialReducer {
  isFetch: boolean;
  isError: boolean;
  isErrorPut: boolean;
  errorMessagePut: null | string;
  errorMessage: null | string;
  payCards: TypePayCardsList;
}
