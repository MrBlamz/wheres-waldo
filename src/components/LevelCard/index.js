import { useHistory } from 'react-router';
import { changeUrlPath } from '../../helpers/historyAPI';
import {
  Container,
  Image,
  InfoContainer,
  Level,
  AvatarsContainer,
  Avatar,
} from './styles';

const LevelCard = ({ image, level, characters = [], selectLevel }) => {
  const history = useHistory();
  const avatars = characters.map((character, index) => (
    <Avatar src={character.avatar} key={index} />
  ));

  const handleClick = () => {
    selectLevel(level);
    changeUrlPath(history, '/game');
  };

  return (
    <Container onClick={() => handleClick()}>
      <Image src={image} />
      <InfoContainer>
        <Level>{`Level ${level}`}</Level>
        <AvatarsContainer>{avatars}</AvatarsContainer>
      </InfoContainer>
    </Container>
  );
};

export default LevelCard;
