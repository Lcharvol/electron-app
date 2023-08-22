import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getStartIcon from './utils';
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
  right: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: all 0.4s ease-in-out;
`;

const Label = styled.div<{ $isActive: boolean }>`
  padding-right: ${({ $isActive }) => ($isActive ? 2 : -1)}rem;
  transition: all 0.3s ease-in-out;
`;

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
        setStates((initialStates) => ({
          ...initialStates,
          isSuccess: true,
        }));

        return res;
      })
      ?.catch(() => {
        setStates((initialStates) => ({
          ...initialStates,
          isFailure: true,
        }));
      })
      ?.finally(() => {
        setStates((initialStates) => ({
          ...initialStates,
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
    if (onClick && !isLoading && !isSuccess && !isFailure) {
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
