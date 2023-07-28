import { Autocomplete, Box } from '@/UI';
import i18next from 'i18next';

const options = [
  {
    metadata: {
      code: 'FR',
    },
    label: 'France',
    value: 'fr',
  },
  {
    metadata: {
      code: 'GB-ENG',
    },
    label: 'English',
    value: 'en',
  },
];
const Language = () => {
  const onChange = (event, newValue) => {
    i18next.changeLanguage(newValue?.value);
  };

  return (
    <Autocomplete
      label="Choose a language"
      options={options}
      onChange={onChange}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.metadata?.code?.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.metadata?.code?.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.metadata?.code})
        </Box>
      )}
    />
  );
};

export default Language;
