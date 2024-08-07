import React from 'react';
import { Outlet } from 'react-router-dom';

export function Galleries() {
  return (
    <>
      <div>Here are your galleries</div>
      <Outlet />
    </>
  );
}
