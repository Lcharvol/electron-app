import styled from 'styled-components';
import { useEffect } from 'react';
import Typography from '../Typography';

const exeptions = [
  {
    name: 'meta',
    symbol: '⌘',
  },
];
interface ShortCutProps {
  keys: string[];
  action: () => void;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 0.4rem;
  height: 1.5rem;
  font-size: 0.7rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.palette.font.disabled};
`;

const ShortCut = ({ keys, action }: ShortCutProps) => {
  const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const hasMetaKey = keys.includes('meta');
    if (
      ((hasMetaKey && event.metaKey) || !hasMetaKey) &&
      keys.includes(event.key)
    ) {
      action();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keyDownEvent);
  }, []);

  const label = keys
    .map((key) => {
      const exeption = exeptions.find((exeption) => exeption.name === key);
      return exeption?.symbol || key;
    })
    .join('');
  return (
    <Container onKeyDown={keyDownEvent}>
      <Typography variant="caption">{label}</Typography>
    </Container>
  );
};

export default ShortCut;
