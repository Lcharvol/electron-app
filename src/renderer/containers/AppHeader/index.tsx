import styled from 'styled-components';
import { mdiBellOutline } from '@mdi/js';
import { useTranslation } from 'react-i18next';
import { IconButton, Badge, Tooltip } from '@/UI';
import UserDropDown from './UserDropDown';
import GlobalSearch from '../GlobalSearch';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  & > * {
    margin-left: 0.5rem;
  }
`;

const AppHeader = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <GlobalSearch />
      <Tooltip title={t('Notifications')}>
        <div>
          <Badge badgeContent={3} overlap="circular">
            <IconButton iconPath={mdiBellOutline} />
          </Badge>
        </div>
      </Tooltip>
      <UserDropDown />
    </Container>
  );
};

export default AppHeader;
