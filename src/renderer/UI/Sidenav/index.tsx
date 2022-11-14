import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Item from './Item';
import { Container, Content, Routes } from './styles';
import { RouteType } from './types';
import { getIsItemSelected } from './utils';

interface SidenavProps {
  routes: RouteType[];
  topNode?: ReactNode;
  isSmall?: boolean;
}

const Sidenav = ({ routes = [], topNode, isSmall }: SidenavProps) => {
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
      </Content>
    </Container>
  );
};

export default Sidenav;
