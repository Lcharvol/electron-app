import React from 'react';

interface ImageProps {
  src: string;
}
const Image = ({ src }) => {
  return <img src={src} />;
};

export default Image;
