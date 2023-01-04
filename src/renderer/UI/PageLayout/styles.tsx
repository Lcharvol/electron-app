import styled from 'styled-components';

interface MenuProps {
  $isSmall?: boolean;
}

export const Content = styled.div`
  display: flex;
  height: 100%;
`;

export const Menu = styled.div<MenuProps>`
  max-width: ${({ $isSmall }) => ($isSmall ? '5rem' : '16rem')};
  min-width: ${({ $isSmall }) => ($isSmall ? '5rem' : '16rem')};
  transition: all 0.2s ease-in-out;
`;

export const PageContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  // background-color: red;
  width: 100%;
  height: 2rem;
`;
