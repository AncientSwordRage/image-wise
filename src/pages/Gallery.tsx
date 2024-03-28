import React from 'react';
import { useParams } from 'react-router-dom';

export function Gallery() {
  const { id } = useParams();
  return <div>{`This is the gallery page for id '${id}'`}</div>;
}
