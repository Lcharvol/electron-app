import MuiBadge, { BadgeProps } from '@mui/material/Badge';

const Badge = ({ badgeContent, children }: BadgeProps) => {
  return <MuiBadge badgeContent={badgeContent}>{children}</MuiBadge>;
};

export default Badge;
