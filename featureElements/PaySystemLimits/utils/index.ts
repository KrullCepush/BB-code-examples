import { TypePaySystemLimit } from '../types';

export interface TPaySystem {
  paySystemTitle: string;
  paySystemId: string;
  paySystemData: TypePaySystemLimit[];
}

export interface TLimit {
  paySystemGroupId: string;
  paySystemGroupTitle: string;
  paySystems: TPaySystem[];
}

export interface TLimitsStatuses {
  [id: string]: Array<string>;
}

const checkValueLimit = (limit: TypePaySystemLimit) => {
  if (
    !limit.dailyPayOutLimit &&
    (limit.dailyPayOutLimit !== null ||
      limit.dailyPayOutLimit !== 0 ||
      limit.dailyPayOutLimit !== '0')
  ) {
    return { ...limit, dailyPayOutLimit: null };
    // @ts-ignore
  } else if (limit.dailyPayOutLimit === '0') {
    return { ...limit, dailyPayOutLimit: 0 };
  }

  return limit;
};

export const createGroupLimits = (limits: TypePaySystemLimit[]) =>
  limits.reduce((prev: TLimit[], cur: TypePaySystemLimit) => {
    const result = [...prev];

    const findGroup = result.find(
      (el) => String(el.paySystemGroupId) === String(cur.paySystemGroupId),
    );

    if (findGroup) {
      const findPaySystem = findGroup.paySystems.find(
        (paySystemItem) =>
          String(paySystemItem.paySystemId) ===
          `${cur.paySystemId}.${cur.paySystemKindId}`,
      );

      if (findPaySystem) {
        findPaySystem.paySystemData.push(checkValueLimit(cur));
      } else {
        findGroup.paySystems.push({
          paySystemTitle: `${cur.paySystemLabel}${
            cur.paySystemKindLabel ? ' - ' + cur.paySystemKindLabel : ''
          }`,
          paySystemId: `${cur.paySystemId}.${cur.paySystemKindId}`,
          paySystemData: [checkValueLimit(cur)],
        });
      }
    } else {
      result.push({
        paySystemGroupId: String(cur.paySystemGroupId),
        paySystemGroupTitle: String(cur.paySystemGroupLabel),
        paySystems: [
          {
            paySystemTitle: `${cur.paySystemLabel}${
              cur.paySystemKindLabel ? ' - ' + cur.paySystemKindLabel : ''
            }`,
            paySystemId: `${cur.paySystemId}.${cur.paySystemKindId}`,
            paySystemData: [checkValueLimit(cur)],
          },
        ],
      });
    }

    return result;
  }, []);

export const removeLeadingZero = (value: string) =>
  value.replace(/(^[0]+)([\S]+)/g, '$2');
