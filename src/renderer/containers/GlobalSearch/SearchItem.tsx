import styled, { useTheme } from 'styled-components';
import { Icon } from '@mdi/react';
import { T } from 'ramda';
import { ReactNode } from 'react';
import { Typography, Stack, Card, Divider } from '@/UI';

const Container = styled(Card)`
  display: flex;
  background-color: 'transparent';
  cursor: pointer;
  margin-top: 0.5rem;
  box-sizing: border-box;
  :hover {
    border: solid 2px ${({ theme }) => theme.palette.primary.main};
  }
`;

interface SearchItemProps {
  item: {
    label: string;
    iconPath?: string;
  };
  sectionItemsIconPath?: string;
  closeDialog: () => void;
}
const SearchItem = ({
  item,
  sectionItemsIconPath,
  closeDialog,
}: SearchItemProps) => {
  const theme = useTheme();
  const renderFunction = item.render || ((children: ReactNode) => children);

  return renderFunction(
    <>
      <Container onClick={closeDialog}>
        <Stack direction="row" spacing={2}>
          {(item.iconPath || sectionItemsIconPath) && (
            <Icon
              path={item.iconPath || sectionItemsIconPath}
              size={1}
              color={theme.palette.font.secondary}
            />
          )}
          <Typography>{item.label}</Typography>
        </Stack>
      </Container>
      <Divider />
    </>
  );
};

export default SearchItem;
