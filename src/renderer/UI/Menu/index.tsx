import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactNode } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Icon } from '@mdi/react';
import { useTheme } from '@mui/system';

interface MenuProps {
  items?: {
    render: () => ReactNode;
    onClick?: () => void;
    iconPath?: string;
  }[];
  open: boolean;
  onClose: () => void;
  onClick?: () => void;
  anchorEl: null | HTMLElement;
}

function Menu({ items, open, onClose, onClick, anchorEl }: MenuProps) {
  const theme = useTheme();
  return (
    <MuiMenu
      open={open}
      onClose={onClose}
      onClick={onClick}
      anchorEl={anchorEl}
    >
      {items?.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
          {item.iconPath && (
            <ListItemIcon>
              <Icon
                path={item.iconPath}
                size={0.9}
                color={theme.palette.font.normal}
              />
            </ListItemIcon>
          )}
          {item.render()}
        </MenuItem>
      ))}
    </MuiMenu>
  );
}

export default Menu;
