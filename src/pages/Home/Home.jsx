import { useSelector } from 'react-redux';
import { Box, Title } from './Home.styled';

import { selectIsLoading } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';
const Home = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Box>
      <Title> Welcome to homepage "Phonebook_App"</Title>;
      <Title> This project was created by Vitalii Dashivets & GoIT</Title>;
      {isLoading && <Loader />}
    </Box>
  );
};
export default Home;
