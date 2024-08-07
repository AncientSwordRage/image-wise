/// <reference types="vite-plugin-svgr/client" />
import { Button } from '@mui/material';
import React from 'react';
import '../app.css';

export function Home() {
  return (
    <>
      <div className="card">
        <p>
          Create a new image comparison gallery below
        </p>
        <Button href="/gallery/new">Create new gallery</Button>
      </div>
      <p className="subtitle">
        Click on the logo to go home
      </p>
    </>
  );
}
