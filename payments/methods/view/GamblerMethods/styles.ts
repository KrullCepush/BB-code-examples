import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    mainWrapper: {
      margin: spacing(3, 0),
      border: `1px solid ${color.light2}`,
      borderRadius: '4px',
    },
  }),
);
