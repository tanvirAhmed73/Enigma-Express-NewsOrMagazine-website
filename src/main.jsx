import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './AllComponents/Layout/Layout';
import Home from './AllComponents/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{
      path: '/',
      element: <Home></Home>
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto font-Poppins'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
