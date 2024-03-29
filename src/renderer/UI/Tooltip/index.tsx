import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';

const Tooltip = ({ children, title, arrow, placement }: TooltipProps) => {
  return (
    <MuiTooltip title={title} arrow={arrow} placement={placement}>
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
