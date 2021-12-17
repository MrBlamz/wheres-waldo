import { useHistory } from 'react-router';
import { changeUrlPath } from '../../helpers/historyAPI';
import { Container, TextContainer, BlackText, RedText } from './styles';
import Button from '../Button';

const LeaderBoardCard = () => {
  const history = useHistory();

  return (
    <Container>
      <TextContainer>
        <BlackText>Are you a Waldo expert?</BlackText>
        <RedText>View the leaderboard</RedText>
      </TextContainer>
      <Button primary onClick={() => changeUrlPath(history, '/leaderboard')}>
        View Leaderboard
      </Button>
    </Container>
  );
};

export default LeaderBoardCard;
