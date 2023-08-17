import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';

const Tooltip = ({ children, title, arrow }: TooltipProps) => {
  return (
    <MuiTooltip title={title} arrow={arrow}>
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
