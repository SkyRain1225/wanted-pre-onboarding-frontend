import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Register />,
    },
  ]);
  return routes;
};

export default Router;
