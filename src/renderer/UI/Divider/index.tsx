import MuiDivider, { DividerProps } from '@mui/material/Divider';

function Divider({ children, orientation, sx }: DividerProps) {
  return (
    <MuiDivider orientation={orientation} sx={sx} flexItem>
      {children}
    </MuiDivider>
  );
}

export default Divider;
