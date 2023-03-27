import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: spacing(2, 0),
    },
    menu: {
      display: 'flex',
      width: '100%',
      height: '30px',
      paddingLeft: spacing(2),
    },
    rootButton: {
      border: 'none',
      fontWeight: 600,
      color: color.dark5,
      marginRight: spacing(2),
      borderRadius: '4px 4px 0px 0px',
    },
    rootButtonActive: {
      borderBottom: `1px solid ${color.common1}`,
      color: color.common1,
    },
    skeletonsWrapper: {
      display: 'flex',
      height: '30px',
      '& > span': {
        width: '110px',
        height: '30px',
        marginRight: spacing(2),
      },
    },
  }),
);
