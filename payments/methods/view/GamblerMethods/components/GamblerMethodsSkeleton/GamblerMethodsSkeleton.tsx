import React from 'react';
import { GeneratedSkeletons } from 'components/GeneratedSkeletons';
import { Skeleton } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export const GamblerMethodsSkeleton = () => {
  const styles = useStyles();

  return (
    <Box className={styles.skeletonsWrapper}>
      <GeneratedSkeletons count={4} component={Skeleton} />
    </Box>
  );
};
