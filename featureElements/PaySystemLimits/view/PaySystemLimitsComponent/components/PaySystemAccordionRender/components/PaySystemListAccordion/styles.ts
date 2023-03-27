import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    paySystem: {
      marginBottom: spacing(1),
      boxShadow: `3px 1px 5px ${color.light2}`,
      border: `1px solid ${color.light2}`,
      padding: spacing(1),
      borderRadius: '8px',
    },
    paySystemTitle: {},
    PaySystemTitleButton: {
      border: 0,
    },
    PaySystemTitleIcon: {
      width: '24px',
      height: '24px',
      marginRight: '4px',
    },
    paySystemFormWrap: {
      marginTop: '12px',
    },
    formContent: {
      marginBottom: spacing(3),
    },
    buttonsWrap: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    buttons: {
      display: 'flex',
      padding: spacing(4, 2, 2),
      border: `1px solid ${color.light2}`,
      borderRadius: '8px',
    },
    formActionButtons: {
      '& button:first-child': {
        marginRight: spacing(1),
      },
    },
  }),
);
