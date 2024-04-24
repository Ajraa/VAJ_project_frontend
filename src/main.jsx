import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login, { loginAction } from './login';
import Register, { registerAction } from './register';
import Mail from './mail';
import ChangePassword, { changePasswordAction } from './changePassword';
import EmailList, { emailListLoader } from './components/emailList';
import MailContent, {mailContentAction, mailContentLoader} from './components/mailContent';


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
    children: [
      {
        path: ":mode",
        element: <EmailList/>,
        loader: emailListLoader,
      },
      {
        path: "content/:mail_id",
        element: <MailContent/>,
        loader: mailContentLoader,
        action: mailContentAction
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
