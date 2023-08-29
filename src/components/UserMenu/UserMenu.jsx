import { Box, UserLogMenu, LogoutBtn } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { ImHappy } from 'react-icons/im';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //   const handleLogOut = () => {
  //     dispatch(logOut);
  //   };
  return (
    <Box>
      <UserLogMenu>
        <ImHappy /> Welcome, {user.name}
      </UserLogMenu>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        LOGOUT
      </LogoutBtn>
    </Box>
  );
};
