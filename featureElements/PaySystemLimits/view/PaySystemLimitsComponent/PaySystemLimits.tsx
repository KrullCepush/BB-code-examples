import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import {
  actionFetchPaySystemLimits,
  actionUpdatePaySystemLimits,
} from '../../store/api';
import { resetPaySystemLimits } from '../../store/slice';
import { selectorGamblerId } from 'store/GamblerData/selectors';
import { selectorPaySystemLimits } from '../../store/selectors';
import { createGroupLimits, TLimit } from '../../utils';
import {
  PaySystemLimitsSkeleton,
  PaySystemAccordionRender,
} from './components';
import { useStyles } from './styles';
import { TypePaySystemLimit } from '../../types';
import { useModalFormSubmit } from 'hooks/useModalFormSubmit';

export const PaySystemLimits = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const gamblerId = useSelector(selectorGamblerId);
  const limitsState = useSelector(selectorPaySystemLimits);

  const [limits, setLimits] = useState<TLimit[]>([]);

  const createAction = useCallback(
    (value: TypePaySystemLimit[]) => {
      dispatch(
        actionUpdatePaySystemLimits({
          url: `/gamblers/${gamblerId}/pay-systems`,
          value,
        }),
      );
    },
    [gamblerId],
  );

  const { Modal, openModalHandler } = useModalFormSubmit({
    action: createAction,
  });

  useEffect(() => {
    if (gamblerId) {
      dispatch(
        actionFetchPaySystemLimits({
          url: `gamblers/${gamblerId}/pay-systems`,
        }),
      );
    }
  }, [gamblerId]);

  useEffect(() => {
    if (gamblerId && limitsState.isUpdateTable) {
      dispatch(resetPaySystemLimits());

      dispatch(
        actionFetchPaySystemLimits({
          url: `gamblers/${gamblerId}/pay-systems`,
        }),
      );
    }
  }, [gamblerId, limitsState.isUpdateTable]);

  useEffect(() => {
    setLimits(createGroupLimits(limitsState.limits));
  }, [limitsState.limits.length]);

  if (!gamblerId) {
    return <PaySystemLimitsSkeleton />;
  }

  if (limitsState.isFetchRequest) {
    return <PaySystemLimitsSkeleton />;
  }

  if (limitsState.isErrorRequest) {
    return <Alert severity="error">{limitsState.errorMessage}</Alert>;
  }

  if (!limits.length) {
    return <Alert severity="error">Данные отсутствуют.</Alert>;
  }

  return (
    <Box className={styles.limitsWrap}>
      <PaySystemAccordionRender
        limits={limits}
        openModalHandler={openModalHandler}
      />
      {Modal}
    </Box>
  );
};
