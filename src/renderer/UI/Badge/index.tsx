import MuiBadge, { BadgeProps } from '@mui/material/Badge';

const Badge = ({ badgeContent, children, overlap }: BadgeProps) => {
  return (
    <MuiBadge badgeContent={badgeContent} overlap={overlap}>
      {children}
    </MuiBadge>
  );
};

export default Badge;
