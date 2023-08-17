import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete';
import TextField from '../TextField';

type Optiontype = {
  label: string;
  value: any;
  metadata?: { [key: string]: any };
};
interface AutocompleteProps
  extends Omit<
    MuiAutocompleteProps<
      Optiontype,
      undefined,
      boolean | undefined,
      boolean | undefined
    >,
    'renderInput'
  > {
  label?: string;
}

function Autocomplete({
  options,
  label,
  renderOption,
  onChange,
}: AutocompleteProps) {
  return (
    <MuiAutocomplete
      options={options}
      renderOption={renderOption}
      onChange={onChange}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

export default Autocomplete;
