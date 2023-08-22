import { mdiCheck, mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';
import { always, cond, T } from 'ramda';
import CircularProgress from '@mui/material/CircularProgress';

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
      always(<Icon data-testid="failureIcon" path={mdiClose} size="1.5rem" />),
    ],
    [T, () => null],
  ])();

export default getStartIcon;
