import { Container, Grid } from './styles';
import MainTopBar from '../../components/MainTopBar';
import LevelCard from '../../components/LevelCard';
import LeaderboardCard from '../../components/LeaderboardCard';
import { levelOne } from '../../data';
import Spacer from '../../components/Spacer';

const Home = () => {
  return (
    <>
      <MainTopBar />
      <Container>
        <Grid>
          <LevelCard
            characters={levelOne.characters}
            image={levelOne.picture}
            level={levelOne.level}
            key={1}
          />
          <LevelCard
            characters={levelOne.characters}
            image={levelOne.picture}
            level={levelOne.level}
            key={2}
          />
          <LevelCard
            characters={levelOne.characters}
            image={levelOne.picture}
            level={levelOne.level}
            key={3}
          />
          <LevelCard
            characters={levelOne.characters}
            image={levelOne.picture}
            level={levelOne.level}
            key={4}
          />
          <LevelCard
            characters={levelOne.characters}
            image={levelOne.picture}
            level={levelOne.level}
            key={5}
          />
          <LevelCard
            characters={levelOne.characters}
            image={levelOne.picture}
            level={levelOne.level}
            key={6}
          />
        </Grid>
        <Spacer marginTop={'5vh'} />
        <LeaderboardCard />
      </Container>
    </>
  );
};

export default Home;
