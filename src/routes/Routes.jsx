import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';

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
  ]);
  return routes;
};

export default Router;
