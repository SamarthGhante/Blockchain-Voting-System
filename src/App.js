import { useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Home.js";
import Admin from "./components/admin/Admin.js";
import Wallet from './components/Wallet/Wallet.js';

function App({ }) {

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/admin', element: <Admin/> },

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}



export default App;