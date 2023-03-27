import React, { ReactElement, useCallback } from 'react';
import { TLimitsStatuses } from '../../../../../../utils';
import { Box, Button, Icon, Typography } from '@material-ui/core';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { useStyles } from './styles';

interface TPros {
  groupTitle: string;
  groupId: string | number;
  openGroupsList: TLimitsStatuses[];
  openGroupsListHandler: React.Dispatch<
    React.SetStateAction<TLimitsStatuses[]>
  >;
  children: ReactElement;
}

export const PaySystemGroupAccordion = ({
  groupTitle,
  groupId,
  openGroupsList,
  openGroupsListHandler,
  children,
}: TPros) => {
  const styles = useStyles();
  const isOpenGroup = !!openGroupsList.find(
    (GroupsList) => GroupsList[groupId],
  );

  const handlerOnSwitchFieldGroup = useCallback(() => {
    const isFind = !!openGroupsList.find((GroupsList) => GroupsList[groupId]);

    if (isFind) {
      openGroupsListHandler(openGroupsList.filter((group) => !group[groupId]));
    } else {
      openGroupsListHandler([...openGroupsList, { [groupId]: [] }]);
    }
  }, [openGroupsList]);

  return (
    <Box className={styles.limitsGroup}>
      <Box className={styles.limitsGroupTitle}>
        <Button
          component="span"
          className={styles.limitsGroupTitleButton}
          onClick={handlerOnSwitchFieldGroup}>
          <Icon color="primary" className={styles.limitsGroupTitleIcon}>
            {isOpenGroup ? <RemoveCircle /> : <AddCircle />}
          </Icon>
          <Typography variant="body1">{groupTitle}</Typography>
        </Button>
      </Box>
      {isOpenGroup && children}
    </Box>
  );
};
