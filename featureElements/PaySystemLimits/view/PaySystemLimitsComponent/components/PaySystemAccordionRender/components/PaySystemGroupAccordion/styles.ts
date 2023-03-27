import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    limitsGroup: {
      marginBottom: spacing(1),
    },
    limitsGroupTitle: {
      display: 'flex',
      alignItems: 'center',
      padding: spacing(1),
      boxShadow: `3px 1px 5px ${color.light2}`,
      border: `1px solid ${color.light2}`,
      borderRadius: '8px',
      marginBottom: '12px',
    },
    limitsGroupTitleButton: {
      border: 0,
    },
    limitsGroupTitleIcon: {
      width: '24px',
      height: '24px',
      marginRight: '4px',
    },
  }),
);
