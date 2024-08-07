import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLayout from './components/PageLayout';
import { Home } from './pages/Home';
import { Galleries } from './pages/Galleries';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';
import { Gallery } from './pages/Gallery';
import { GalleryForm } from './pages/GalleryForm';

export function Router() {
  return (
    <Routes>
      <Route index element={<PageLayout page={<Home />} />} />
      <Route path="/gallery" element={<PageLayout page={<Galleries />} />}>
        <Route path="new" element={<GalleryForm />} />
        <Route path=":id" element={<Gallery />} />
      </Route>
      <Route path="/profile" element={<PageLayout page={<Profile />} />} />
      <Route path="*" element={<PageLayout page={<NotFound />} />} />
    </Routes>
  );
}
