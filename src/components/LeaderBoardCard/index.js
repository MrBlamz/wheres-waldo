import { Container, TextContainer, BlackText, RedText } from './styles';
import Button from '../Button';

const LeaderboardCard = ({ handleClick }) => (
  <Container>
    <TextContainer>
      <BlackText>Are you a Waldo expert?</BlackText>
      <RedText>View the leaderboard</RedText>
    </TextContainer>
    <Button primary onClick={() => handleClick('/leaderboard')}>
      View Leaderboard
    </Button>
  </Container>
);

export default LeaderboardCard;
