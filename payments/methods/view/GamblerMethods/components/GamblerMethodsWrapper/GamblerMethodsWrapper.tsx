import React, { useCallback, useEffect, useState } from 'react';
import { TypePayCardsList } from '../../../../types';
import { Alert } from '@material-ui/lab';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';
import {
  actionFetchDeletePayment,
  actionFetchUpdateDefaultPayments,
} from '../../../../store/api';
import { useDispatch } from 'react-redux';
import { ModalAccept } from 'widgets/ModalAccept';
import {
  createPaymentsMethods,
  payCardsIsDefaultCheckHandle,
  TCreatePaymentsMethods,
} from '../../../../utils';
import { GamblerMethodsTemplate } from './GamblerMethodsTemplate';

interface TProps {
  payCards: TypePayCardsList;
  isError: boolean;
  errorMessage: string | null;
  gamblerId: null | string;
}

const modalDefaultState = {
  isOpen: false,
  action: () => {},
  title: '',
  description: '',
};

export const GamblerMethodsWrapper = ({
  payCards,
  isError,
  errorMessage,
  gamblerId,
}: TProps) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [groupPayments, setGroupPayments] = useState<TCreatePaymentsMethods[]>(
    [],
  );

  const [modalOptions, setModalOptions] = useState(modalDefaultState);

  const openModalHandler = useCallback(({ action, title, description }) => {
    setModalOptions({
      isOpen: true,
      action,
      title,
      description,
    });
  }, []);

  const closeModalHandler = useCallback(() => {
    setModalOptions(modalDefaultState);
  }, []);

  const updatePaymentMethodToDefaultHandler = useCallback(
    (event, payCardId) => {
      const isDefault = event.target.checked;

      openModalHandler({
        title: 'Подтвердите редактирование данных',
        description:
          'Это действие изменит основной платежный метод пользователя',
        action: () =>
          dispatch(
            actionFetchUpdateDefaultPayments({
              url: `/gamblers-pay-cards/${payCardId}/set-default`,
              value: {
                default: isDefault,
              },
            }),
          ),
      });
    },
    [],
  );

  const deletePaymentMethodHandler = useCallback((payCardId) => {
    openModalHandler({
      title: 'Подтвердите редактирование данных',
      description: 'Это действие удалит платежный метод пользователя',
      action: () =>
        dispatch(
          actionFetchDeletePayment({
            url: `/gamblers-pay-cards/${gamblerId}`,
            value: {
              payCardId,
            },
          }),
        ),
    });
  }, []);

  const payCardsIsDefaultCheck = useCallback(
    () => payCardsIsDefaultCheckHandle(payCards),
    [payCards],
  );

  useEffect(() => {
    setGroupPayments(createPaymentsMethods(payCards));
  }, [payCards?.length, payCardsIsDefaultCheck()]);

  if (isError) {
    return (
      <Box className={styles.infoWrapper}>
        <Alert severity="error">
          <Typography variant="body2">{errorMessage}</Typography>
        </Alert>
      </Box>
    );
  }

  if (!Array.isArray(groupPayments) || !groupPayments?.length) {
    return (
      <Box className={styles.infoWrapper}>
        <Alert severity="warning">
          <Typography variant="body2">Список пуст</Typography>
        </Alert>
      </Box>
    );
  }

  return (
    <Box className={styles.paymentWrapper}>
      <ModalAccept
        onActionHandler={modalOptions.action}
        isOpen={modalOptions.isOpen}
        onCloseHandler={closeModalHandler}
        title={modalOptions.title}
        description={modalOptions.description}
      />

      {groupPayments.map((payCardGroup) => (
        <Box key={payCardGroup.paySystemId} className={styles.payment}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box className={styles.paymentLabel}>
                <Typography variant="h3">
                  {payCardGroup?.paySystemLabel}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box className={styles.paymentsWrapper}>
                {payCardGroup.payments.map((payCard) => (
                  <GamblerMethodsTemplate
                    payCard={payCard}
                    updateAction={updatePaymentMethodToDefaultHandler}
                    deleteAction={deletePaymentMethodHandler}
                    key={payCard.payCardId}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};
