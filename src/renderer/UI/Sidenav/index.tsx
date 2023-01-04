import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Item from './Item';
import { Container, Content, Bottom, Routes, Body } from './styles';
import { RouteType, ActionType } from './types';
import { getIsItemSelected } from './utils';

interface SidenavProps {
  routes: RouteType[];
  topNode?: ReactNode;
  body?: ReactNode;
  actions?: ActionType[];
  isSmall?: boolean;
}

const Sidenav = ({
  routes = [],
  topNode,
  isSmall,
  actions,
  body,
}: SidenavProps) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('');
  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  return (
    <Container>
      <Content>
        {topNode}
        <Routes>
          {routes.map((route, index) => (
            <Item
              route={route}
              isSmall={isSmall}
              isSelected={getIsItemSelected({
                routes,
                index,
                selectedItem,
              })}
              key={route.path}
            />
          ))}
        </Routes>
        <Body>{body}</Body>

        <Bottom>
          {actions?.map((action) => (
            <Item route={action} isSmall={isSmall} />
          ))}
        </Bottom>
      </Content>
    </Container>
  );
};

export default Sidenav;
