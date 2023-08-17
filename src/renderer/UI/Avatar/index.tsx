import MuiAvatar from '@mui/material/Avatar';
import React, { ReactNode } from 'react';
import { SxProps } from '@mui/material';

interface AvatarProps {
  alt?: string;
  src?: string;
  children?: ReactNode;
  variant?: 'square' | 'circular' | 'rounded' | undefined;
  sx?: SxProps;
}

const Avatar = ({ alt, src, children, variant, sx }: AvatarProps) => {
  return (
    <MuiAvatar alt={alt} src={src} variant={variant} sx={sx}>
      {children}
    </MuiAvatar>
  );
};

export default Avatar;
