import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login, { loginAction } from './login';
import Register, { registerAction } from './register';
import Mail from './mail';
import ChangePassword, { changePasswordAction } from './changePassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  },
  {
    path: '/changepassword',
    element: <ChangePassword/>,
    action: changePasswordAction
  },
  {
    path: '/mail/:id',
    element: <Mail />,
    children: []
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
