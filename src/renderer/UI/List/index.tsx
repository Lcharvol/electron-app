import MuiList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ReactNode } from 'react';

interface ListProps {
  items: any[];
  renderItem: (item: any) => ReactNode;
}
const List = ({ items, renderItem }: ListProps) => {
  return (
    <MuiList>
      {items.map((item, index) => (
        <div key={index}>
          {renderItem ? renderItem(item) : <ListItem>{item}</ListItem>}
        </div>
      ))}
    </MuiList>
  );
};

export default List;
