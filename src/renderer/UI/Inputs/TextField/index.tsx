import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';

export type TextFieldProps = MuiTextFieldProps;

function TextField({
  variant,
  label,
  placeholder,
  fullWidth,
  inputProps,
  InputLabelProps,
  InputProps,
  size,
  kind,
  disabled,
  autoFocus,
  onChange,
}: MuiTextFieldProps) {
  return (
    <MuiTextField
      fullWidth={fullWidth}
      variant={variant}
      label={label}
      placeholder={placeholder}
      size={size}
      inputProps={inputProps}
      kind={kind}
      InputLabelProps={{ ...InputLabelProps }}
      InputProps={InputProps}
      disabled={disabled}
      autoFocus={autoFocus}
      onChange={onChange}
    />
  );
}

export default TextField;
