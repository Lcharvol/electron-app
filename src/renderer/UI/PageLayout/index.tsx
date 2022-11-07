import React, { cloneElement, ReactElement, ReactNode } from 'react';

import { useWindowSize } from '@/hooks';

import { SMALL_SIDENAV_WINDOW_WITH } from './constants';
import {
  Container,
  Content,
  Menu,
  PageContent,
  TopBarContainer,
} from './styles';

interface PageLayoutProps {
  menu?: ReactElement;
  children?: ReactNode;
  topMenu?: ReactNode;
}
const PageLayout = ({ menu, children, topMenu }: PageLayoutProps) => {
  const [windowWidth] = useWindowSize();
  const isSmall = windowWidth < SMALL_SIDENAV_WINDOW_WITH;

  return (
    <Container>
      {topMenu && <TopBarContainer>{topMenu}</TopBarContainer>}
      <Content>
        {menu && (
          <Menu $isSmall={isSmall}>{cloneElement(menu, { isSmall })}</Menu>
        )}
        <PageContent>{children}</PageContent>
      </Content>
    </Container>
  );
};

export default PageLayout;
