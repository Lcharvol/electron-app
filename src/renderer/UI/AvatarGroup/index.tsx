import MuiAvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '../Avatar';

interface AvatarGroupProps {
  items: { src?: string }[];
  max?: number;
  total?: number;
}

const AvatarGroup = ({ items = [], max, total }: AvatarGroupProps) => {
  return (
    <MuiAvatarGroup max={max} total={total}>
      {items.map(({ src }) => (
        <Avatar src={src} />
      ))}
    </MuiAvatarGroup>
  );
};

export default AvatarGroup;
