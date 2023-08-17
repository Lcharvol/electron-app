import { Icon } from '@mdi/react';
import InputAdornment from '@mui/material/InputAdornment';
import { mdiMagnify } from '@mdi/js';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TextField from '../Inputs/TextField';
import ShortCut from '../ShortCut';
import Button from '../Button';

interface SearchBarProps {
  onClick?: () => void;
  hasShortCut?: boolean;
  isButton?: boolean;
  onChange?: (event) => void;
}

function SearchBar({
  onClick,
  hasShortCut,
  isButton,
  onChange,
}: SearchBarProps) {
  const theme = useTheme();
  const { t } = useTranslation();

  if (isButton) {
    return (
      <Button
        size="small"
        onClick={onClick}
        startIcon={<Icon path={mdiMagnify} size={1} />}
        variant="searchBar"
        endIcon={<ShortCut keys={['meta', 'k']} action={onClick} />}
      >
        {t('Search')}
      </Button>
    );
  }
  return (
    <TextField
      size="small"
      onClick={onClick}
      placeholder={t('Search')}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon
              path={mdiMagnify}
              size={0.8}
              color={theme.palette.font.normal}
            />
          </InputAdornment>
        ),
        ...(hasShortCut && {
          endAdornment: <ShortCut keys={['meta', 'k']} action={onClick} />,
        }),
      }}
    />
  );
}

export default SearchBar;
