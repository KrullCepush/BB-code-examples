import React, { ChangeEvent } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';
import { TypePayCard } from '../../../../../types';

interface TProps {
  payCard: TypePayCard;
  updateAction: (
    event: ChangeEvent<HTMLInputElement>,
    payCardId: string,
  ) => void;
  deleteAction: (payCard: string) => void;
}

export const GamblerMethodsTemplate = ({
  payCard,
  updateAction,
  deleteAction,
}: TProps) => {
  const styles = useStyles({ default: payCard.default });

  return (
    <fieldset className={styles.payCard}>
      <legend>
        <Typography variant="h4">{payCard.cardLabel}</Typography>
      </legend>
      <Box className={styles.defaultPaymentWrapper}>
        <FormControlLabel
          className={styles.defaultPayment}
          control={
            <Checkbox
              defaultChecked
              checked={payCard?.default || false}
              onChange={(event) => updateAction(event, payCard.payCardId)}
              size="small"
              color="primary"
            />
          }
          label="Основной"
        />
      </Box>
      <Box className={styles.maskLabel}>
        <Typography variant="h4">
          Реквизиты: {payCard?.mask || ' - '}
        </Typography>
      </Box>
      <Box className={styles.buttonsWrapper}>
        <Button
          onClick={() => deleteAction(payCard.payCardId)}
          className={styles.buttonDelete}
          variant="outlined">
          Удалить
        </Button>
      </Box>
    </fieldset>
  );
};
