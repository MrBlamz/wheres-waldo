import { useHistory } from 'react-router';
import { Container, Grid } from './styles';
import MainTopBar from '../../components/MainTopBar';
import LevelCard from '../../components/LevelCard';
import LeaderBoardCard from '../../components/LeaderBoardCard';
import Spacer from '../../components/Spacer';

const Home = ({ data }) => {
  const history = useHistory();

  const changeUrlPath = (path) => {
    history.push(path);
  };

  const levelCards = data.map((item, index) => {
    const { image, level, characters } = item;
    return (
      <LevelCard
        key={index}
        image={image}
        level={level}
        characters={characters}
        handleClick={changeUrlPath}
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
