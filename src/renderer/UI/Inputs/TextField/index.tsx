import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import React from 'react';

export type TextFieldProps = MuiTextFieldProps;

const TextField = (props: MuiTextFieldProps) => {
  return <MuiTextField fullWidth variant="outlined" {...props} />;
};

export default TextField;
