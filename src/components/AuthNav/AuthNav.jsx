import { HeaderLink } from 'components/Layout/Layout.styled';

export const AuthNav = () => {
  return (
    <div>
      <HeaderLink to="/login">Log in</HeaderLink>
      <HeaderLink to="/register">Sign up</HeaderLink>
    </div>
  );
};
