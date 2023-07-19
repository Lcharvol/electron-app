import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactNode } from 'react';

interface MenuProps {
  items?: { render: () => ReactNode; onClick?: () => void }[];
  open: boolean;
  onClose: () => void;
  onClick?: () => void;
  anchorEl: null | HTMLElement;
}

const Menu = ({ items, open, onClose, onClick, anchorEl }: MenuProps) => {
  return (
    <MuiMenu
      open={open}
      onClose={onClose}
      onClick={onClick}
      anchorEl={anchorEl}
    >
      {items?.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
          {item.render()}
        </MenuItem>
      ))}
    </MuiMenu>
  );
};

export default Menu;
