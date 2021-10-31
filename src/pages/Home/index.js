import { Container, Grid } from './styles';
import MainTopBar from '../../components/MainTopBar';
import LevelCard from '../../components/LevelCard';
import LeaderboardCard from '../../components/LeaderboardCard';
import Spacer from '../../components/Spacer';

const Home = ({ data }) => {
  const levelCards = data.map((item, index) => {
    const { image, level, characters } = item;
    return (
      <LevelCard
        key={index}
        image={image}
        level={level}
        characters={characters}
      />
    );
  });

  return (
    <>
      <MainTopBar />
      <Container>
        <Grid>{levelCards}</Grid>
        <Spacer marginTop={'5vh'} />
        <LeaderboardCard />
      </Container>
    </>
  );
};

export default Home;
