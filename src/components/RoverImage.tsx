"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export default function RoverImage(props: ImageProps) {
  const [imageError, setImageError] = useState(false);
  const finalSrc = imageError ? '/placeholder.svg' : props.src;

  return (
    <Image
      {...props}
      src={finalSrc}
      onError={() => setImageError(true)}
    />
  );
}