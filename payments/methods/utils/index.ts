import { TypePayCard, TypePayCardsList } from '../types';

export interface TCreatePaymentsMethods {
  paySystemLabel: string;
  paySystemId: number | null;
  payments: TypePayCard[];
}

export const createPaymentsMethods = (payments: TypePayCardsList) => {
  if (!Array.isArray(payments) || !payments?.length) {
    return [];
  }

  const PaymentsMethods = payments.reduce(
    (prev: TCreatePaymentsMethods[], cur: TypePayCard) => {
      const result = [...prev];

      const findGroup = result.find(
        (el) => String(el.paySystemId) === String(cur.paySystemId),
      );

      if (findGroup) {
        findGroup.payments.push({ ...cur });
      } else {
        result.push({
          paySystemLabel: cur.paySystemLabel || 'Не опознанная группа методов',
          paySystemId: cur.paySystemId || null,
          payments: [{ ...cur }],
        });
      }

      return result;
    },
    [],
  );

  return PaymentsMethods || [];
};

export const payCardsIsDefaultCheckHandle = (payCards: TypePayCardsList) =>
  (Array.isArray(payCards) &&
    payCards.reduce((payCardsCode: string, payCard) => {
      let result = String(payCardsCode) + String(payCard.payCardId);

      if (payCard.default) {
        result += '1';
      } else {
        result += '0';
      }

      return result;
    }, '')) ||
  '';
