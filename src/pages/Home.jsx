import { HomeComponent } from 'components/HomeComponent/HomeComponent';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const HomePage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return !isRefreshing && <HomeComponent />;
};
