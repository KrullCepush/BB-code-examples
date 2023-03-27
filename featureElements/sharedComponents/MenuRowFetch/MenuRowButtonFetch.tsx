import React from 'react';
import { Box, Button } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { TypeItemMenu } from './types';
import { Skeleton } from '@material-ui/lab';

interface TProps {
  onClickItemHandler: () => void;
  itemActiveId: string | number;
  item: TypeItemMenu;
  loading: boolean;
}

export const MenuRowButtonFetch = ({
  item,
  onClickItemHandler,
  itemActiveId,
  loading,
}: TProps) => {
  const styles = useStyles();

  if (loading) {
    return (
      <Box className={styles.skeletonsWrapper}>
        <Skeleton />
      </Box>
    );
  }

  return (
    <Button
      disabled={item.disabled}
      onClick={onClickItemHandler}
      classes={{ root: styles.rootButton }}
      className={clsx({
        [styles.rootButtonActive]: itemActiveId === item.id,
      })}>
      {item.label}
    </Button>
  );
};
