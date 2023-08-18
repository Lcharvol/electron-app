import MuiAvatar from '@mui/material/Avatar';
import { ReactNode } from 'react';
import { SxProps } from '@mui/material';

export interface AvatarProps {
  alt?: string;
  src?: string;
  children?: ReactNode;
  variant?: 'square' | 'circular' | 'rounded';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
  className?: string;
}

const sxPropsBySize = {
  small: { width: 24, height: 24 },
  medium: { width: 40, height: 40 },
  large: { width: 56, height: 56 },
};

const Avatar = ({
  alt,
  src,
  children,
  variant,
  sx,
  size = 'medium',
  className,
}: AvatarProps) => {
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      variant={variant}
      className={className}
      sx={{ ...sxPropsBySize[size], ...sx }}
    >
      {children}
    </MuiAvatar>
  );
};

export default Avatar;
