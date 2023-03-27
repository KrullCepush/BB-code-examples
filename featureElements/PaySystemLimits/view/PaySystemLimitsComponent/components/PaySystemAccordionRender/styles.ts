import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    paySystemWrap: {
      paddingLeft: '12px',
    },
  }),
);
