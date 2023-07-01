import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const LoginPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isRefreshing && <LoginForm />;
};
