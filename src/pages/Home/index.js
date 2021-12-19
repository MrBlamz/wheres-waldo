import { useHistory } from 'react-router-dom';
import { changeUrlPath } from '../../helpers/historyAPI';
import { Container, Grid } from './styles';
import MainTopBar from '../../components/MainTopBar';
import LevelCard from '../../components/LevelCard';
import LeaderBoardCard from '../../components/LeaderBoardCard';
import Spacer from '../../components/Spacer';
import Loader from '../../components/Loader';

const Home = ({ data, selectLevel, isLoading }) => {
  const history = useHistory();

  const handleLevelCardClick = (level) => {
    selectLevel(level);
    changeUrlPath(history, '/game');
  };

  const levelCards = data.map((item) => {
    const { image, level, characters, id } = item;
    return (
      <LevelCard
        key={id}
        image={image.url}
        level={level}
        characters={characters}
        onClick={() => handleLevelCardClick(level)}
      />
    );
  });

  return (
    <>
      <MainTopBar selectLevel={selectLevel} />
      <Container>
        {isLoading ? <Loader /> : <Grid>{levelCards}</Grid>}
        <Spacer marginTop={'5vh'} />
        <LeaderBoardCard />
      </Container>
    </>
  );
};

export default Home;
