import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, color }: Theme) =>
  createStyles({
    fieldsWrap: {
      border: `1px solid ${color.light2}`,
      borderRadius: '8px',
      marginBottom: spacing(4),
      padding: spacing(1),
    },
    fieldWrap: {
      display: 'flex',
      alignItems: 'center',
      marginTop: spacing(3),
      '&:first-child': {
        margin: 0,
      },
    },
    fieldLabelWrap: {
      display: 'flex',
      alignItems: 'center',
      marginRight: spacing(1),
      '& h4:first-child': {
        marginRight: '4px',
      },
    },
    fieldInputWrap: {
      display: 'flex',
      alignItems: 'center',
    },
    fieldInput: {},
    buttonsWrap: {
      display: 'flex',
      alignItems: 'center',
    },
    buttonGroup: {
      display: 'flex',
      alignItems: 'center',
      marginRight: spacing(1),
    },
    buttonGroupLabel: {
      display: 'flex',
      alignItems: 'center',
      '& p': {
        marginRight: '4px',
      },
    },
  }),
);
