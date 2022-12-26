import React, { cloneElement, ReactElement, ReactNode } from 'react';

import { useWindowSize } from '@/hooks';

import { SMALL_SIDENAV_WINDOW_WITH } from './constants';
import { Content, Menu, PageContent } from './styles';

interface PageLayoutProps {
  menu?: ReactElement;
  children?: ReactNode;
}
const PageLayout = ({ menu, children }: PageLayoutProps) => {
  const [windowWidth] = useWindowSize();
  const isSmall = windowWidth < SMALL_SIDENAV_WINDOW_WITH;

  return (
    <Content>
      {menu && (
        <Menu $isSmall={isSmall}>{cloneElement(menu, { isSmall })}</Menu>
      )}
      <PageContent>{children}</PageContent>
    </Content>
  );
};

export default PageLayout;
