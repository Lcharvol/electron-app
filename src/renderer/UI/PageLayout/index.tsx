import { cloneElement, ReactElement, ReactNode } from 'react';

import { useWindowSize } from '@/hooks';

import { SMALL_SIDENAV_WINDOW_WITH } from './constants';
import { Content, Menu, PageContent, Header } from './styles';

interface PageLayoutProps {
  menu?: ReactElement;
  children?: ReactNode;
  header?: ReactNode;
}
const PageLayout = ({ menu, children, header }: PageLayoutProps) => {
  const [windowWidth] = useWindowSize();
  const isSmall = windowWidth < SMALL_SIDENAV_WINDOW_WITH;

  return (
    <Content>
      {menu && (
        <Menu $isSmall={isSmall}>{cloneElement(menu, { isSmall })}</Menu>
      )}

      <PageContent>
        {header && <Header>{header}</Header>}
        {children}
      </PageContent>
    </Content>
  );
};

export default PageLayout;
