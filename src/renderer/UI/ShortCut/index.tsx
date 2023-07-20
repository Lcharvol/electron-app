import styled from 'styled-components';
import { useEffect } from 'react';

interface ShortCutProps {
  keys: string[];
  action: () => void;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 1rem;
  height: 1.5rem;
  font-size: 0.7rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
`;

const getKeysLabel = (keys: string[]) =>
  keys.map((key) => String.fromCharCode(key)).join('');

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

  const label = getKeysLabel(keys);
  return <Container onKeyDown={keyDownEvent}>{label}</Container>;
};

export default ShortCut;
