import React from 'react';
import { Divider } from '@material-ui/core';
import { useStyles } from './styles';
import { MenuRowButtonFetch } from './MenuRowButtonFetch';
import { TMenuRowFetch } from './types';

export const MenuRowFetch = ({
  items,
  activeItem,
  onClickItemHandler,
  isLoading = false,
}: TMenuRowFetch) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        {items.map((item) => (
          <MenuRowButtonFetch
            key={item.id}
            item={item}
            itemActiveId={activeItem}
            onClickItemHandler={() => onClickItemHandler(item)}
            loading={isLoading}
          />
        ))}
      </div>
      <Divider />
    </div>
  );
};
