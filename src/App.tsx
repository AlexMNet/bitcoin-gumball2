import {
  Cog6ToothIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/solid';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import SignMessage from './components/SignMessage';
import MintMessage from './components/MintMessage';
import { useState } from 'react';
import RootLayout from './layouts/RootLayout';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Accordion />} />
      <Route path="sign-message" element={<SignMessage />} />
      <Route path="mint-message" element={<MintMessage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
