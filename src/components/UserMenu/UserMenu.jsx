import { Box, UserLogMenu, LogoutBtn } from './UserMenu.styled';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { ImHappy } from 'react-icons/im';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

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
