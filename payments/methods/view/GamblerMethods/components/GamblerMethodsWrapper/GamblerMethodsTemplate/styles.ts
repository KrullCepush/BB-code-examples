import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    maskLabel: {
      marginBottom: spacing(2),
    },
    payCard: (props: any) => ({
      width: '100%',
      border: `1px solid ${props.default ? color.common2 : color.light2}`,
      borderRadius: '8px',
      padding: spacing(1),
      boxSizing: 'border-box',
      marginBottom: spacing(1),
    }),
    defaultPaymentWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: spacing(1),
    },
    defaultPayment: (props: any) => ({
      border: `2px solid ${props.default ? color.common2 : color.light2}`,
      color: color.common2,
      paddingRight: spacing(1),
      borderRadius: '12px',
      '& span': {
        color: props.default ? color.common2 : color.light2,
      },
    }),
    buttonsWrapper: {
      width: '100%',
      marginBottom: spacing(2),
      '& button': {
        width: '100%',
        marginBottom: spacing(1),
        display: 'block',
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    buttonDelete: {
      border: `1px solid ${color.common3}`,
      color: color.common3,
    },
  }),
);
