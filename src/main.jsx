import React, { useContext } from 'react'
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
import Register from './LoginOrRegister/Register';
import Login from './LoginOrRegister/Login';
import AuthProvider, { AuthContext } from './AuthProvider/AuthProvider';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import DashBoardLayout from './Dashboard/DashBoardLayout/DashBoardLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
    {
      path: '/',
      element: <Tech></Tech>,
    },
    {
      path: '/entertainment',
      element: <Entertainment></Entertainment>,
    },
    {
      path: '/politics',
      element: <Politics></Politics>,
    },
    {
      path: '/fashion',
      element: <Fashion></Fashion>,
    },
    {
      path: '/sport',
      element: <Sports></Sports>,
    },
    {
      path: '/business',
      element: <Business></Business>,
    },
    {
      path: '/tech',
      element: <Tech></Tech>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    }
  ]
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout></DashBoardLayout>,
    children:[ 
      {
          path: 'addNews',
          element: <PrivateRoutes><AddNews></AddNews></PrivateRoutes>
      }
      
    ]

  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='font-Poppins'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
