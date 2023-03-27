import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    buttons: {
      marginRight: spacing(1),
      '&:last-child': {
        margin: 0,
      },
      '& button': {
        marginBottom: spacing(1),
        display: 'flex',
        width: '190px',
      },
    },
  }),
);
