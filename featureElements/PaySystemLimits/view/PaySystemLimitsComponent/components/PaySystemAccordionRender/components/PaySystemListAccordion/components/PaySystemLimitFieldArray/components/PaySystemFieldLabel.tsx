import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles';

export const PaySystemFieldLabel = ({ input }: any) => {
  const styles = useStyles();
  return (
    <Box className={styles.fieldLabelWrap}>
      <Typography variant="h4">
        {input.value?.currencySymbol || ' - '}
      </Typography>
      <Typography variant="h4">
        {input.value?.currencyAlpha3 || ' - '}
      </Typography>
    </Box>
  );
};
