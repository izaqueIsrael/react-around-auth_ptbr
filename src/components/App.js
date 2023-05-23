import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { sucessIcon, failIcon } from '../utils/constants';
import auth from '../utils/auth';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';

function App() {
  // loggin
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.validateUserToken(token)
        .then(() => setLoggedIn(true))
        .catch(() => setLoggedIn(false));
    }
  }, [loggedIn]);

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    setLoggedIn(false);
  }

  // modal status
  const [requisitionStatus, setRequisitionStatus] = useState(false);
  const [statsModal, setStatsIcon] = useState(false);
  const sucessText = 'Vitória, sua requisição foi um sucesso';
  const failText = 'Ops, algo saiu deu errado! Por favor, tente novamente.';

  // api
  const login = async (userData) => {
    await auth.userLogin({ newPassword: userData.password.value, newEmail: userData.mail.value })
      .then(() => {
        setStatsIcon(true);
        setLoggedIn(true);
      })
      .catch(() => {
        setRequisitionStatus(!requisitionStatus);
        setStatsIcon(false);
      })
  }

  const register = async (userData) => {
    await auth.registerUser({ newPassword: userData.password.value, newEmail: userData.mail.value })
      .then(() => {
        setStatsIcon(true);
        setRequisitionStatus(!requisitionStatus);
      })
      .catch(() => {
        setStatsIcon(false);
        setRequisitionStatus(!requisitionStatus);
      })
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute loggedIn={loggedIn} children={<Home logout={logout} />} />,
    },
    {
      path: '/signin',
      element: <Login setSend={login} loggedIn={loggedIn} />,
    },
    {
      path: 'signup',
      element: <Register setSend={register} />,
    },
  ]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <InfoTooltip
        className={`${requisitionStatus ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        popupIsOpen={requisitionStatus}
        handleClose={setRequisitionStatus}
        modalIcon={`${statsModal ? sucessIcon : failIcon}`}
        modalText={`${statsModal ? sucessText : failText}`}
      />
    </>
  );
}
export default App;