import MuiAvatar from '@mui/material/Avatar';
import React, { ReactNode } from 'react';

interface AvatarProps {
  alt?: string;
  src?: string;
  children?: ReactNode;
  variant: 'square' | 'circular' | 'rounded' | undefined;
}
const Avatar = ({ alt, src, children, variant }: AvatarProps) => {
  return (
    <MuiAvatar alt={alt} src={src} variant={variant}>
      {children}
    </MuiAvatar>
  );
};

export default Avatar;
