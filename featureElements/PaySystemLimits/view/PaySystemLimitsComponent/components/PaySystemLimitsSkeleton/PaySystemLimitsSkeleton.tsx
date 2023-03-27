import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const COUNT_OF_SKELETONS = Math.floor(Math.random() * (5 - 2) + 2);

export const PaySystemLimitsSkeleton = () => (
  <Box marginBottom={3} marginTop={2}>
    {Array(COUNT_OF_SKELETONS)
      .fill('')
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={index} marginBottom={3}>
          <Grid
            item
            xl={4}
            lg={8}
            md={8}
            xs={8}
            style={{ marginBottom: '8px' }}>
            <Skeleton height={24} variant="rect" />
          </Grid>
          <Box marginLeft={3}>
            {Array(Math.floor(Math.random() * (3 - 1) + 1))
              .fill('')
              .map((_, index2) => (
                <Grid
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  xs={6}
                  key={index2}
                  style={{ marginBottom: '8px' }}>
                  <Skeleton height={24} variant="rect" />
                </Grid>
              ))}
          </Box>
        </Box>
      ))}
  </Box>
);
