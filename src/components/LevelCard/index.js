import {
  Container,
  Image,
  InfoContainer,
  Level,
  AvatarsContainer,
  Avatar,
} from './styles';

const LevelCard = ({
  image,
  level,
  characters,
  changeUrlPath,
  selectLevel,
}) => {
  const avatars = characters.map((character, index) => (
    <Avatar src={character.avatar} key={index} />
  ));

  const handleClick = () => {
    selectLevel(level);
    changeUrlPath('/game');
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
