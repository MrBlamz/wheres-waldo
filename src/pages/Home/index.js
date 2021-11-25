import { useHistory } from 'react-router';
import { Container, Grid } from './styles';
import MainTopBar from '../../components/MainTopBar';
import LevelCard from '../../components/LevelCard';
import LeaderBoardCard from '../../components/LeaderBoardCard';
import Spacer from '../../components/Spacer';

const Home = ({ data, selectLevel }) => {
  const history = useHistory();

  const changeUrlPath = (path) => {
    history.push(path);
  };

  const levelCards = data.map((item) => {
    const { image, level, characters, id } = item;
    return (
      <LevelCard
        key={id}
        image={image}
        level={level}
        characters={characters}
        changeUrlPath={changeUrlPath}
        selectLevel={selectLevel}
      />
    );
  });

  return (
    <>
      <MainTopBar handleClick={changeUrlPath} />
      <Container>
        <Grid>{levelCards}</Grid>
        <Spacer marginTop={'5vh'} />
        <LeaderBoardCard handleClick={changeUrlPath} />
      </Container>
    </>
  );
};

export default Home;
