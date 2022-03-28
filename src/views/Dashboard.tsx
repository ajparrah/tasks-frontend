import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useStore';
import Actions from '../sections/Dashboard/Actions';
import Container from '../sections/Dashboard/Container';
import Header from '../sections/Dashboard/Header';
import Tasks from '../sections/Dashboard/Tasks';
import { getAllTask } from '../globals/slices/taskReducer';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Actions />
      <Tasks />
    </Container>
  );
};

export default Home;
