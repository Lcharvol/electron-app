import MuiPaper, { PaperProps } from '@mui/material/Paper';

const Paper = ({ children, elevation, className }: PaperProps) => {
  return (
    <MuiPaper elevation={elevation} className={className}>
      {children}
    </MuiPaper>
  );
};
export default Paper;
