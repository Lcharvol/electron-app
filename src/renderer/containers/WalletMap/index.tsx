import { Map } from '@/UI';

const WalletMap = () => {
  const markers = [{ id: 0, coordinates: [2.343, 48.858] }];
  return <Map markers={markers} />;
};

export default WalletMap;
