import React, { useState, useEffect } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Todo from '../pages/Todo';

const Router = () => {
  const isToken = localStorage.getItem('token');

  const routes = useRoutes([
    {
      path: '/',
      element: isToken ? <Navigate replace to="/todo" /> : <Login />,
    },
    {
      path: '/signup',
      element: isToken ? <Navigate replace to="/todo" /> : <Register />,
    },
    {
      path: '/todo',
      element: isToken ? <Todo /> : <Navigate replace to="/" />,
    },
  ]);
  return routes;
};

export default Router;
