import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import colors from '@/colors';

const StyledTextField = styled(MuiTextField)`
  .MuiInputBase-input {
    color: red;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${colors.secondary.ultralight};
    }
  }
  .MuiOutlinedInput-root:hover:not(.Mui-disabled, .Mui-focused) {
    fieldset {
      border-color: ${colors.secondary.verylight};
    }
  }
  .MuiOutlinedInput-root.Mui-focused {
    color: ${colors.secondary.normal};
  }
  .MuiFormLabel-root {
    color: ${colors.secondary.ultralight};
  }
`;
export type TextFieldProps = MuiTextFieldProps;

const TextField = (props: MuiTextFieldProps) => {
  return <StyledTextField fullWidth variant="outlined" {...props} />;
};

export default TextField;
