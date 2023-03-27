import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    skeletonsWrapper: {
      display: 'block',
      height: '100%',
      width: '100%',
      '& > span': {
        width: '100%',
        height: '60px',
      },
    },
  }),
);
