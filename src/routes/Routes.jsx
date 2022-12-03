import React from 'react';
import { useRoutes } from 'react-router-dom';
import Main from '../pages/Main';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
  ]);
};

export default Routes;
