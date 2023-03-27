import {
  Box,
  Icon,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { FieldInputProps } from 'react-final-form';
import { InfoOutlined } from '@material-ui/icons';
import { useStyles } from '../styles';
import { removeLeadingZero } from '../../../../../../../../../utils';

interface TProps {
  input: FieldInputProps<number | null>;
}

const tooltips = {
  disabled: 'Блокирует вывод средств для данной валюты',
  delete:
    'Отключает управление и выставляет стандартный лимит на вывод средств для данной валюты.',
};

const MAX_LENGTH_INPUT = 10;

export const PaySystemLimitFormInput = ({ input }: TProps) => {
  const styles = useStyles();

  const disabledStatus =
    input.value === null ||
    (Number(input.value) === 0 && String(input.value) !== '');

  const disabledStatusSwitch = input.value === null;

  const onChangeValueInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;

    if (value.length > 1 && value[0] === '0') {
      input.onChange(removeLeadingZero(String(value)));
    } else if (value !== '' && Number(value) < 0) {
      input.onChange('1');
    } else if (value === '') {
      input.onChange(value);
    } else if (value === '0') {
      input.onChange('1');
    } else if (value.length <= MAX_LENGTH_INPUT) {
      input.onChange(value);
    }
  };

  const onChangeSwitchDisabled = () => {
    if (Number(input.value) === 0) {
      input.onChange('1');
    } else {
      input.onChange(0);
    }
  };

  const onChangeSwitchDeleted = () => {
    if (input.value === null) {
      input.onChange('1');
    } else {
      input.onChange(null);
    }
  };

  return (
    <Box className={styles.fieldInputWrap}>
      <TextField
        id="standard-number"
        value={input.value || ''}
        onChange={(e) => onChangeValueInput(e)}
        type="text"
        className={styles.fieldInput}
        disabled={disabledStatus}
        margin="none"
        required
      />
      <Box className={styles.buttonsWrap}>
        <Box className={styles.buttonGroup}>
          <Switch
            checked={
              input.value !== null &&
              Number(input.value) === 0 &&
              String(input.value) !== ''
            }
            onChange={onChangeSwitchDisabled}
            disabled={disabledStatusSwitch}
          />
          <Box className={styles.buttonGroupLabel}>
            <Typography>Заблокировать</Typography>
            <Tooltip placement="top" title={tooltips.disabled}>
              <Icon>
                <InfoOutlined />
              </Icon>
            </Tooltip>
          </Box>
        </Box>
        <Box className={styles.buttonGroup}>
          <Switch
            checked={input.value === null}
            onChange={onChangeSwitchDeleted}
          />
          <Box className={styles.buttonGroupLabel}>
            <Typography variant="body1">Отключить</Typography>
            <Tooltip placement="top" title={tooltips.delete}>
              <Icon>
                <InfoOutlined />
              </Icon>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
