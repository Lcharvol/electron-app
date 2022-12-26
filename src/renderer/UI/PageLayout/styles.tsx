import styled from 'styled-components';

interface MenuProps {
  $isSmall?: boolean;
}

export const Content = styled.div`
  display: flex;
  height: 100%;
`;

export const Menu = styled.div<MenuProps>`
  max-width: ${({ $isSmall }) => ($isSmall ? '5rem' : '18rem')};
  min-width: ${({ $isSmall }) => ($isSmall ? '5rem' : '18rem')};

  transition: all 0.2s ease-in-out;
`;

export const PageContent = styled.div`
  padding: 2rem;
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
`;
