import styled from 'styled-components';

interface MenuProps {
  $isSmall?: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
`;

export const TopBarContainer = styled.div`
  height: 5rem;
`;

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
  padding: 0 2rem;
  padding-top: 0;
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
`;
