import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const RegisterPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isRefreshing && <RegisterForm />;
};
