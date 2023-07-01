import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/operations';
import { selectName } from 'redux/auth/selectors';
import { BtnLogOut, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(selectName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <UserName>{userName}</UserName>
      <BtnLogOut type="button" onClick={handleLogOut}>
        Log out
      </BtnLogOut>
    </div>
  );
};
