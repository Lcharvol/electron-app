import { IconButton, Badge } from '@/UI';
import styled from 'styled-components';
import { mdiBellOutline } from '@mdi/js';
import UserDropDown from './UserDropDown';
import GlobalSearch from '../GlobalSearch';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  & > * {
    margin-left: 0.5;
  }
`;

const AppHeader = () => {
  return (
    <Container>
      <GlobalSearch />
      <Badge badgeContent={3} color="primary">
        <IconButton iconPath={mdiBellOutline} />
      </Badge>
      <UserDropDown />
    </Container>
  );
};

export default AppHeader;
