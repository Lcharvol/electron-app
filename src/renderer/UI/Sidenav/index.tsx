import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Item from './Item';
import { Container, Content, Routes } from './styles';
import { RouteType, ActionType } from './types';
import { getIsItemSelected } from './utils';
import Divider from '../Divider';

interface SidenavProps {
  routes: RouteType[];
  topNode?: ReactNode;
  actions?: ActionType[];
  isSmall?: boolean;
}

const Sidenav = ({ routes = [], topNode, isSmall, actions }: SidenavProps) => {
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
              key={index}
            />
          ))}
        </Routes>
        {actions?.map((action) => (
          <Item route={action} />
        ))}
      </Content>
    </Container>
  );
};

export default Sidenav;
