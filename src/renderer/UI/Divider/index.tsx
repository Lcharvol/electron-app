import MuiDivider, { DividerProps } from '@mui/material/Divider';

const Divider = ({ children, orientation }: DividerProps) => {
  return (
    <MuiDivider orientation={orientation} flexItem>
      {children}
    </MuiDivider>
  );
};

export default Divider;
