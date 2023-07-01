import { ContactsComponent } from 'components/ContactsComponent/ContactsComponent';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const ContactsPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isRefreshing && <ContactsComponent />;
};
