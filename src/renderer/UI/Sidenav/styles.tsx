import styled from 'styled-components';
import colors from '@/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: solid 0.05rem ${() => colors.primary.light};
  padding-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.sidenavBackground};
  border-radius: 0 0.6rem 0 0;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Routes = styled.div`
  padding: 2rem 0;
`;
