import { Icon } from '@mdi/react';
import InputAdornment from '@mui/material/InputAdornment';
import { mdiMagnify } from '@mdi/js';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TextField from '../Inputs/TextField';
import ShortCut from '../ShortCut';

const StyledTextField = styled(TextField)`
  max-width: 20rem;
`;
interface SearchBarProps {
  onClick?: () => void;
  hasShortCut?: boolean;
}

const SearchBar = ({ onClick, hasShortCut }: SearchBarProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <StyledTextField
      size="small"
      onClick={onClick}
      placeholder={t('Search')}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon
              path={mdiMagnify}
              size={0.8}
              color={theme.palette.secondary.light}
            />
          </InputAdornment>
        ),
        ...(hasShortCut && {
          endAdornment: <ShortCut keys={['meta', 'k']} action={onClick} />,
        }),
      }}
    />
  );
};

export default SearchBar;
