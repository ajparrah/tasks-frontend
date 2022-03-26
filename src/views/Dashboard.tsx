import Actions from '../sections/Dashboard/Actions';
import Container from '../sections/Dashboard/Container';
import Header from '../sections/Dashboard/Header';
import Tasks from '../sections/Dashboard/Tasks';

const Home = () => {
  return (
    <Container>
      <Header />
      <Actions />
      <Tasks />
    </Container>
  );
};

export default Home;
