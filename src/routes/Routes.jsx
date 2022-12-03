import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Todo from '../pages/Todo';

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Register />,
    },
    {
      path: '/todo',
      element: <Todo />,
    },
  ]);
  return routes;
};

export default Router;
