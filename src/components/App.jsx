import { ContactsPage } from 'pages/Contacts';
import { RegisterPage } from 'pages/Register';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'pages/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRefreshThunk } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { HomePage } from 'pages/Home';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefreshThunk());
  }, [dispatch]);

  return (
    <div>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};
