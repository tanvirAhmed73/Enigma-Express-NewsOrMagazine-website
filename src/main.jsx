import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './AllComponents/Layout/Layout';
import Home from './AllComponents/Home/Home';
import Tech from './AllComponents/Pages/Tech';
import Entertainment from './AllComponents/Pages/Entertainment';
import AddNews from './AdminAccess/AddNews';
import Business from './AllComponents/Pages/Business';
import Sports from './AllComponents/Pages/Sports';
import Fashion from './AllComponents/Pages/Fashion';
import Politics from './AllComponents/Pages/Politics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
    {
      path: '/',
      element: <Tech></Tech>,
      loader: ()=>fetch('http://localhost:5000/allNews')
    },
    {
      path: '/entertainment',
      element: <Entertainment></Entertainment>,
      loader : ()=>fetch('http://localhost:5000/allNews')
    },
    {
      path: '/politics',
      element: <Politics></Politics>,
      loader : ()=>fetch('http://localhost:5000/allNews')
    },
    {
      path: '/fashion',
      element: <Fashion></Fashion>,
      loader : ()=>fetch('http://localhost:5000/allNews')
    },
    {
      path: '/sport',
      element: <Sports></Sports>,
      loader : ()=>fetch('http://localhost:5000/allNews')
    },
    {
      path: '/business',
      element: <Business></Business>,
      loader : ()=>fetch('http://localhost:5000/allNews')
    },
    {
      path: '/tech',
      element: <Tech></Tech>,
      loader: ()=>fetch('http://localhost:5000/allNews')
    },
    {
      path: '/addNews',
      element: <AddNews></AddNews>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-Poppins'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
