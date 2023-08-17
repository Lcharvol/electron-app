import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputAdornment from '@mui/material/InputAdornment';
import { Icon } from '@mdi/react';
import { mdiMagnify, mdiHistory } from '@mdi/js';
import { useTheme } from '@mui/material';
import {
  SearchBar,
  Dialog,
  TextField,
  Divider,
  Stack,
  ShortCut,
  Typography,
  Box,
  List,
} from '@/UI';
import SearchItem from './SearchItem';
import matchingItems from './matchingItems';

const GlobalSearch = () => {
  const theme = useTheme();
  const [results, setResults] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  const data = [
    {
      title: t('recent'),
      results: [{ label: 'test' }],
      sectionItemsIconPath: mdiHistory,
    },
    {
      results,
    },
  ];

  const handleSearch = ({ target: { value } }) => {
    const newResults = matchingItems.filter((item) =>
      item.label.toLowerCase().match(value)
    );
    setResults(newResults);
  };

  return (
    <>
      <SearchBar onClick={() => setIsDialogOpen(true)} hasShortCut isButton />
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <Stack direction="column">
          <TextField
            kind="simple"
            autoFocus
            placeholder={t('Search')}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon
                    path={mdiMagnify}
                    size={1}
                    color={theme.palette.font.secondary}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <ShortCut
                  keys={['esc']}
                  action={() => setIsDialogOpen(false)}
                />
              ),
            }}
          />
          {data.map(({ title, results, sectionItemsIconPath }, index) => (
            <div key={index}>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Stack direction="column" spacing={2}>
                  {title && <Typography>{title}</Typography>}
                  <List
                    items={results}
                    renderItem={(item) => (
                      <SearchItem
                        item={item}
                        sectionItemsIconPath={sectionItemsIconPath}
                        closeDialog={() => setIsDialogOpen(false)}
                      />
                    )}
                  />
                </Stack>
              </Box>
            </div>
          ))}
        </Stack>
      </Dialog>
    </>
  );
};

export default GlobalSearch;
