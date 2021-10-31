import { Container, TextContainer, BlackText, RedText } from './styles';
import Button from '../Button';

const LeaderboardCard = () => (
  <Container>
    <TextContainer>
      <BlackText>Are you a Waldo expert?</BlackText>
      <RedText>View the leaderboard</RedText>
    </TextContainer>
    <Button primary>View Leaderboard</Button>
  </Container>
);

export default LeaderboardCard;
