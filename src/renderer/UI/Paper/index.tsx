import MuiPaper, { PaperProps } from '@mui/material/Paper';

function Paper({ children, elevation, className }: PaperProps) {
  return (
    <MuiPaper elevation={elevation} className={className}>
      {children}
    </MuiPaper>
  );
}
export default Paper;
