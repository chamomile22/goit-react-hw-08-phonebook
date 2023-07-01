import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectName } from 'redux/auth/selectors';
import { Heading } from './HomeComponent.styled';

export const HomeComponent = () => {
  const userName = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Heading>Welcome, {userName}!</Heading>
      ) : (
        <Heading>
          Welcome! Login to see your contact list or sign up to add contacts
        </Heading>
      )}
    </>
  );
};
