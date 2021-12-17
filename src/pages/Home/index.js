import { Container, Grid } from './styles';
import MainTopBar from '../../components/MainTopBar';
import LevelCard from '../../components/LevelCard';
import LeaderBoardCard from '../../components/LeaderBoardCard';
import Spacer from '../../components/Spacer';

const Home = ({ data, selectLevel }) => {
  const levelCards = data.map((item) => {
    const { image, level, characters, id } = item;
    return (
      <LevelCard
        key={id}
        image={image.url}
        level={level}
        characters={characters}
        selectLevel={selectLevel}
      />
    );
  });

  return (
    <>
      <MainTopBar />
      <Container>
        <Grid>{levelCards}</Grid>
        <Spacer marginTop={'5vh'} />
        <LeaderBoardCard />
      </Container>
    </>
  );
};

export default Home;
