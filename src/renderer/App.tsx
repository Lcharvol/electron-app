import styled from 'styled-components';
import Bootstrap from './Bootstrap';
import Router from './Router';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default function App() {
  return (
    <Bootstrap>
      <Container>
        <Router />
      </Container>
    </Bootstrap>
  );
}
