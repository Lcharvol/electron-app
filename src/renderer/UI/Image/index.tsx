import React from 'react';

interface ImageProps {
  src: string;
}
function Image({ src }) {
  return <img src={src} />;
}

export default Image;
