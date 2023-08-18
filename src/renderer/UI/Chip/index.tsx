import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

const Chip = ({
  icon,
  label,
  variant,
  onClick,
  onDelete,
  avatar,
  color,
  size,
}: MuiChipProps) => {
  return (
    <MuiChip
      icon={icon}
      label={label}
      variant={variant}
      onClick={onClick}
      onDelete={onDelete}
      avatar={avatar}
      color={color}
      size={size}
    />
  );
};

export default Chip;
