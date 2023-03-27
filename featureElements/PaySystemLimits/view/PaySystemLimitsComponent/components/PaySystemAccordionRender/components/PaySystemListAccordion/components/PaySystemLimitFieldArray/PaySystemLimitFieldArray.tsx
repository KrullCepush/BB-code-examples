import { Box } from '@material-ui/core';
import { Field } from 'react-final-form';
import React from 'react';
import { InternalFieldState } from 'final-form';
import { TypePaySystemLimit } from '../../../../../../../../types';
import { PaySystemFieldLabel, PaySystemLimitFormInput } from './components';
import { useStyles } from './styles';

interface TProps {
  fields: InternalFieldState<TypePaySystemLimit>[];
}

export const PaySystemLimitFieldArray = ({ fields }: TProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.fieldsWrap}>
      {fields.map((field) => {
        return (
          <Box key={`${field}`} className={styles.fieldWrap}>
            <Field
              name={`${field}`}
              component={PaySystemFieldLabel}
              allowNull
            />
            <Field
              name={`${field}.dailyPayOutLimit`}
              component={PaySystemLimitFormInput}
              parse={(value) => {
                if (!value) return value;
                return String(value).replace(/[^\d]/g, '');
              }}
              allowNull
            />
          </Box>
        );
      })}
    </Box>
  );
};
