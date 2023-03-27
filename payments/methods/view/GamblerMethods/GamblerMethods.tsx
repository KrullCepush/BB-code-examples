import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchPaymentsMethods } from '../../store/api';
import { selectorPaymentsMethods } from '../../store/selectors';
import { GamblerMethodsSkeleton } from './components/GamblerMethodsSkeleton';
import { GamblerMethodsWrapper } from './components/GamblerMethodsWrapper';
import { selectorGamblerId } from 'store/GamblerData/selectors';

export const GamblerMethods = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { isFetch, isError, errorMessage, payCards } = useSelector(
    selectorPaymentsMethods,
  );
  const gamblerId = useSelector(selectorGamblerId);

  useEffect(() => {
    if (gamblerId) {
      dispatch(
        actionFetchPaymentsMethods({
          url: `/gamblers-pay-cards/${gamblerId}`,
        }),
      );
    }
  }, [gamblerId]);

  return (
    <Box className={styles.mainWrapper}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" width="100%">
            <Typography variant="h4">Платежные методы</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {isFetch ? (
            <GamblerMethodsSkeleton />
          ) : (
            <GamblerMethodsWrapper
              payCards={payCards}
              isError={isError}
              errorMessage={errorMessage}
              gamblerId={gamblerId}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
