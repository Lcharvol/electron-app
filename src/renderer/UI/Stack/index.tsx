import MuiStack, { StackProps } from '@mui/material/Stack';

const Stack = ({ children, spacing, direction }: StackProps) => {
  return (
    <MuiStack spacing={spacing} direction={direction}>
      {children}
    </MuiStack>
  );
};

export default Stack;
