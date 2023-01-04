import styled from 'styled-components';
import colors from '@/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: solid 0.05rem ${() => colors.primary.light};
  background-color: ${({ theme }) => theme.sidenavBackground};
  padding-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Routes = styled.div`
  padding: 2rem 0;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content flex-end;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: auto;
  height: 10rem;
  padding-bottom: 1rem;
`;
