import CircularProgress from '@mui/material/CircularProgress';

import { mdiCheck, mdiCloseCircleOutline } from '@mdi/js';
import { Icon } from '@mdi/react';
import { always, cond, T } from 'ramda';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from '../Button';

export interface FeedbackButtonProps extends ButtonProps {
  children: string;
  isLoading?: boolean;
  isSuccess?: boolean;
  isFailure?: boolean;
  loadingLabel?: string;
  promise?: () => void;
  onClick?: () => void;
  onFinish?: () => void;
}

const IconContainer = styled.div<{ $isActive: boolean }>`
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: all 0.4s ease-in-out;
`;

const Label = styled.div<{ $isActive: boolean }>`
  padding-right: ${({ $isActive }) => ($isActive ? 1 : 0)}rem;
  transition: all 0.3s ease-in-out;
`;
const getStartIcon = ({
  isLoading,
  isSuccess,
  isFailure,
}: {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
}) =>
  cond([
    [
      () => isLoading,
      always(
        <CircularProgress
          data-testid="loadingIcon"
          color="inherit"
          size="1rem"
          disableShrink
        />
      ),
    ],
    [
      () => isSuccess,
      always(<Icon data-testid="successIcon" path={mdiCheck} size="1.5rem" />),
    ],
    [
      () => isFailure,
      always(
        <Icon
          data-testid="failureIcon"
          path={mdiCloseCircleOutline}
          size="2.2rem"
        />
      ),
    ],
    [T, () => null],
  ])();

const FeedbackButton = ({
  isLoading: initialIsLoading = false,
  isSuccess: initialIsSuccess = false,
  isFailure: initialIsFailure = false,
  loadingLabel,
  children,
  onClick,
  promise,
  onFinish,
  variant,
  fullWidth,
  size,
}: FeedbackButtonProps) => {
  const [states, setStates] = useState({
    isLoading: initialIsLoading,
    isSuccess: initialIsSuccess,
    isFailure: initialIsFailure,
  });
  const { isLoading, isSuccess, isFailure } = states;
  const statesHandler = (handler: any) => {
    setStates({
      isLoading: true,
      isSuccess: false,
      isFailure: false,
    });
    handler
      ?.then((res: any) => {
        setStates((intialStates) => ({
          ...intialStates,
          isSuccess: true,
        }));

        return res;
      })
      ?.catch(() => {
        setStates((intialStates) => ({
          ...intialStates,
          isFailure: true,
        }));
      })
      ?.finally(() => {
        setStates((intialStates) => ({
          ...intialStates,
          isLoading: false,
        }));

        if (!isLoading) {
          setTimeout(() => {
            setStates({
              ...states,
              isSuccess: false,
              isFailure: false,
            });
          }, 2500);
        }

        onFinish?.();
      });
  };

  useEffect(() => {
    if (promise && !isLoading) {
      statesHandler(promise);
    }
  }, [promise, isLoading, statesHandler]);

  useEffect(() => {
    setStates({
      isLoading: initialIsLoading,
      isFailure: initialIsFailure,
      isSuccess: initialIsSuccess,
    });
  }, [initialIsFailure, initialIsLoading, initialIsSuccess]);
  // this use effect remove success or fail icon after a small delay
  useEffect(() => {
    if (isSuccess && !isFailure) {
      setTimeout(() => {
        setStates({ ...states, isSuccess: false });
      }, 2000);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isFailure && !isSuccess) {
      setTimeout(() => {
        setStates({ ...states, isFailure: false });
      }, 2000);
    }
  }, [isFailure]);

  const handleClick = () => {
    if (onClick && !isLoading) {
      statesHandler(onClick());
    }
  };

  const shouldDisplayLoadingLabel = isLoading && Boolean(loadingLabel);
  const startIcon = getStartIcon({ isLoading, isSuccess, isFailure });

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={handleClick}
      size={size}
    >
      <IconContainer $isActive={Boolean(startIcon)}>{startIcon}</IconContainer>
      <Label $isActive={Boolean(startIcon)}>
        {shouldDisplayLoadingLabel ? loadingLabel : children}
      </Label>
    </Button>
  );
};

export default FeedbackButton;
