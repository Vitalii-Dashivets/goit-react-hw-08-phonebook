import React from 'react';
import { lazy } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';

const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/" element={<Contacts />} />}
          />
        </Route>
      </Routes>
    </div>
  );
};
