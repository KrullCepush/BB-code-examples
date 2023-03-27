import { Box, Button } from '@material-ui/core';
import React from 'react';
import { FormApi } from 'final-form';
import { TypePaySystemLimit } from '../../../../../../../../types';
import { useStyles } from './styles';

interface TTitleButton {
  [disabled: string]: {
    active: string;
    disabled: string;
  };
}

interface TColorButton {
  [disabled: string]: {
    active: 'primary';
    disabled: 'secondary';
  };
}

const colorButton: TColorButton = {
  disabled: {
    active: 'primary',
    disabled: 'secondary',
  },
  deleted: {
    active: 'primary',
    disabled: 'secondary',
  },
};

const titleButton: TTitleButton = {
  disabled: {
    active: 'Разблокировать все',
    disabled: 'Заблокировать все',
  },
  deleted: {
    active: 'Активировать все',
    disabled: 'Отключить все',
  },
};

interface TProps {
  name: string;
  options: FormApi;
}

export const PaySystemLimitControlButton = ({ name, options }: TProps) => {
  const styles = useStyles();

  const ButtonActionHandlerActive = () => {
    const state = options.getState().values;

    if (name === 'deleted') {
      state.formData.forEach((data: TypePaySystemLimit, index: string) => {
        if (data.dailyPayOutLimit === null) {
          options.change(`formData[${index}].dailyPayOutLimit`, 1);
        }
      });
    }

    if (name === 'disabled') {
      state.formData.forEach((data: TypePaySystemLimit, index: string) => {
        if (data.dailyPayOutLimit === 0) {
          options.change(`formData[${index}].dailyPayOutLimit`, 1);
        }
      });
    }
  };

  const ButtonActionHandlerDisabled = () => {
    const state = options.getState().values;

    if (name === 'deleted') {
      state.formData.forEach((data: TypePaySystemLimit, index: string) =>
        options.change(`formData[${index}].dailyPayOutLimit`, null),
      );
    }

    if (name === 'disabled') {
      state.formData.forEach((data: TypePaySystemLimit, index: string) => {
        if (data.dailyPayOutLimit !== null) {
          options.change(`formData[${index}].dailyPayOutLimit`, 0);
        }
      });
    }
  };

  return (
    <Box className={styles.buttons}>
      <Button
        variant="outlined"
        color={colorButton[name].active}
        onClick={ButtonActionHandlerActive}>
        {titleButton[name].active}
      </Button>
      <Button
        variant="outlined"
        color={colorButton[name].disabled}
        onClick={ButtonActionHandlerDisabled}>
        {titleButton[name].disabled}
      </Button>
    </Box>
  );
};
