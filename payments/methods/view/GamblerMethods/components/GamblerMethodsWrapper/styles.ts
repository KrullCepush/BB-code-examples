import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    infoWrapper: {
      width: '100%',
    },
    paymentsWrapper: {
      width: '100%',
    },
    paymentWrapper: {
      width: '100%',
    },
    payment: {
      width: '100%',
      marginBottom: spacing(1),
    },
    paymentLabel: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
  }),
);
