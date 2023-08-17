import { Map } from '@/UI';

function WalletMap() {
  const markers = [{ id: 0, coordinates: [2.343, 48.858] }];
  return <Map markers={markers} />;
}

export default WalletMap;
