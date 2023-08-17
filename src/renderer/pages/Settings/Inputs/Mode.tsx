import { Icon } from '@mdi/react';
import { mdiWeatherNight, mdiThemeLightDark, mdiWeatherSunny } from '@mdi/js';
import useMediaQuery from '@mui/material/useMediaQuery';
import useColorMode from '@/contexts/colorMode';
import { Autocomplete, Box } from '@/UI';

const Mode = () => {
  const colorMode = useColorMode();
  const systemePreferedMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';
  const options = [
    {
      label: 'System',
      value: systemePreferedMode,
      metadata: {
        icon: mdiThemeLightDark,
      },
    },
    {
      label: 'Dark mode',
      value: 'dark',
      metadata: {
        icon: mdiWeatherNight,
      },
    },
    {
      label: 'Light mode',
      value: 'light',
      metadata: {
        icon: mdiWeatherSunny,
      },
    },
  ];
  return (
    <Autocomplete
      label="Mode"
      onChange={(event, newValue) => {
        if (newValue) {
          colorMode.setColorMode(newValue?.value);
        }
      }}
      options={options}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > *': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <Icon path={option.metadata?.icon} size={0.8} />
          {option.label}
        </Box>
      )}
    />
  );
};

export default Mode;
