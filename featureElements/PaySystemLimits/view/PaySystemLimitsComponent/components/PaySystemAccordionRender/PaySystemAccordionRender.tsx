import React, { useCallback, useState } from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { PaySystemGroupAccordion, PaySystemListAccordion } from './components';
import { TLimit, TLimitsStatuses } from '../../../../utils';
import { TypeOpenModalHandler } from 'hooks/useModalFormSubmit';

interface TProps {
  limits: TLimit[];
  openModalHandler: TypeOpenModalHandler;
}

export const PaySystemAccordionRender = ({
  limits,
  openModalHandler,
}: TProps) => {
  const styles = useStyles();
  const [openGroups, setOpenGroups] = useState<TLimitsStatuses[]>([]);

  const paymentsAccordionIsOpen = useCallback(
    (groupId, paymentId) =>
      !!openGroups.find((group) =>
        group[groupId]?.find((payments) => payments === paymentId),
      ),
    [openGroups],
  );

  const paymentsAccordionCloseHandler = useCallback(
    (groupId, paymentId) => {
      setOpenGroups(
        openGroups.map((group) => {
          if (group[groupId]) {
            group[groupId] = group[groupId].filter(() => !paymentId);
          }

          return group;
        }),
      );
    },
    [openGroups],
  );

  const paymentsAccordionOpenHandler = useCallback(
    (groupId, paymentId) => {
      setOpenGroups(
        openGroups.map((group) => {
          if (group[groupId]) {
            group[groupId] = [...group[groupId], paymentId];
          }

          return group;
        }),
      );
    },
    [openGroups],
  );

  return (
    <Box>
      {limits.map((groupLimit) => (
        <PaySystemGroupAccordion
          key={groupLimit.paySystemGroupId}
          groupTitle={groupLimit.paySystemGroupTitle}
          groupId={groupLimit.paySystemGroupId}
          openGroupsList={openGroups}
          openGroupsListHandler={setOpenGroups}>
          <Box className={styles.paySystemWrap}>
            {groupLimit.paySystems.map((paySystemLimit) => (
              <PaySystemListAccordion
                key={paySystemLimit.paySystemId}
                groupId={groupLimit.paySystemGroupId}
                paySystemValue={paySystemLimit}
                openModal={openModalHandler}
                isOpen={paymentsAccordionIsOpen(
                  groupLimit.paySystemGroupId,
                  paySystemLimit.paySystemId,
                )}
                onOpen={paymentsAccordionOpenHandler}
                onClose={paymentsAccordionCloseHandler}
              />
            ))}
          </Box>
        </PaySystemGroupAccordion>
      ))}
    </Box>
  );
};
