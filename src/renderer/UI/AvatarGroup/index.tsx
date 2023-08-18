import MuiAvatarGroup from '@mui/material/AvatarGroup';
import Avatar, { AvatarProps } from '../Avatar';

interface AvatarGroupProps {
  items: { src?: string }[];
  max?: number;
  total?: number;
  size?: AvatarProps['size'];
}

const AvatarGroup = ({ items = [], max, total, size }: AvatarGroupProps) => {
  return (
    <MuiAvatarGroup max={max} total={total}>
      {items.map(({ src }) => (
        <Avatar src={src} size={size} />
      ))}
    </MuiAvatarGroup>
  );
};

export default AvatarGroup;
