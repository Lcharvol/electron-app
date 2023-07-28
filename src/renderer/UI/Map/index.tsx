import MapBox, { Marker } from 'react-map-gl';
import useColorMode from '@/contexts/colorMode';
import { Icon } from '@mdi/react';
import { mdiHomeCircleOutline } from '@mdi/js';
import { useTheme } from 'styled-components';
import { useMemo } from 'react';
import { MarkersType } from './types';

const accessToken =
  'pk.eyJ1IjoibGNoYXJ2b2wiLCJhIjoiY2xrYnU2NDNuMGh2dDNsbzRqNTU0bXRnbCJ9._jPrUD8GwSVqfK4GRTuNOg';

interface MapProps {
  markers?: MarkersType;
}

const Map = ({ markers }: MapProps) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const isDark = colorMode === 'dark';

  const memoedMarkers = useMemo(
    () =>
      (markers || []).map((marker) => (
        <Marker
          key={marker.id}
          longitude={marker.coordinates[0]}
          latitude={marker.coordinates[1]}
        >
          <Icon
            path={mdiHomeCircleOutline}
            size={2}
            color={theme.palette.secondary.main}
          />
        </Marker>
      )),
    [markers]
  );
  return (
    <MapBox
      mapboxAccessToken={accessToken}
      mapLib={import('mapbox-gl')}
      reuseMaps
      initialViewState={{
        longitude: 2.343,
        latitude: 48.858,
        zoom: 12.4,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle={`https://api.mapbox.com/styles/v1/lcharvol/${
        !isDark ? 'clkbv0rpu000501phew6g2o1n' : 'clkcmhy9l001z01qpexgl3fxc'
      }?access_token=pk.eyJ1IjoibGNoYXJ2b2wiLCJhIjoiY2xrYnUwaDVwMDE0djNscG0zaWNrZW5ociJ9.e-5tXwegrdLY7zAev5mY9A`}
    >
      {memoedMarkers}
    </MapBox>
  );
};

export default Map;
