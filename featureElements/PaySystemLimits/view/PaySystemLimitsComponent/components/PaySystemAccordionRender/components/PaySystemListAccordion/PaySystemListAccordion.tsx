import React from 'react';
import { TypeOpenModalHandler } from 'hooks/useModalFormSubmit';
import { TPaySystem } from '../../../../../../utils';
import { Box, Button, Icon, Typography } from '@material-ui/core';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import {
  PaySystemLimitFieldArray,
  PaySystemLimitControlButton,
} from './components';
import { useStyles } from './styles';

interface TProps {
  paySystemValue: TPaySystem;
  openModal: TypeOpenModalHandler;
  isOpen: boolean;
  groupId: string;
  onOpen: (groupId: string, paymentId: string) => void;
  onClose: (groupId: string, paymentId: string) => void;
}

export const PaySystemListAccordion = ({
  paySystemValue,
  groupId,
  openModal,
  isOpen,
  onOpen,
  onClose,
}: TProps) => {
  const styles = useStyles();
  const switchAccordions = isOpen ? onClose : onOpen;

  return (
    <Box className={styles.paySystem}>
      <Box className={styles.paySystemTitle}>
        <Button
          component="span"
          className={styles.PaySystemTitleButton}
          onClick={() => switchAccordions(groupId, paySystemValue.paySystemId)}>
          <Icon color="primary" className={styles.PaySystemTitleIcon}>
            {isOpen ? <RemoveCircle /> : <AddCircle />}
          </Icon>
          <Typography variant="body1">
            {paySystemValue.paySystemTitle}
          </Typography>
        </Button>
      </Box>
      {isOpen && (
        <Box className={styles.paySystemFormWrap}>
          <Form
            onSubmit={(values) => {
              openModal({
                valueToSendModal: values.formData,
              });
            }}
            initialValues={{ formData: paySystemValue.paySystemData }}
            mutators={{ ...arrayMutators }}
            render={({ handleSubmit, form }) => (
              <form onSubmit={handleSubmit}>
                <Box className={styles.formContent}>
                  <FieldArray
                    name="formData"
                    // @ts-ignore
                    component={PaySystemLimitFieldArray}
                  />
                  <Box className={styles.buttonsWrap}>
                    <fieldset className={styles.buttons}>
                      <legend> Управление группой валют </legend>
                      <PaySystemLimitControlButton
                        name="disabled"
                        options={form}
                      />
                      <PaySystemLimitControlButton
                        name="deleted"
                        options={form}
                      />
                    </fieldset>
                  </Box>
                </Box>
                <Box className={styles.formActionButtons}>
                  <Button color="primary" variant="contained" type="submit">
                    Сохранить
                  </Button>
                  <Button
                    color="default"
                    variant="contained"
                    onClick={() => {
                      form.reset();
                    }}>
                    Сбросить
                  </Button>
                </Box>
              </form>
            )}
          />
        </Box>
      )}
    </Box>
  );
};
