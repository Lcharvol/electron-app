import styled, { useTheme } from 'styled-components';
import { Typography, Stack } from '@/UI';
import { Icon } from '@mdi/react';

const Container = styled(Stack)`
  background-color: 'transparent';
  &:hover {
    background-color: red;
  }
`;

interface SearchItemProps {
  item: {
    label: string;
    iconPath?: string;
  };
  sectionItemsIconPath?: string;
}
const SearchItem = ({ item, sectionItemsIconPath }: SearchItemProps) => {
  const theme = useTheme();
  return (
    <Container direction="row" spacing={2}>
      {(item.iconPath || sectionItemsIconPath) && (
        <Icon
          path={item.iconPath || sectionItemsIconPath}
          size={1}
          color={theme.palette.font.secondary}
        />
      )}
      <Typography>{item.label}</Typography>
    </Container>
  );
};

export default SearchItem;
