import {
  Container,
  Image,
  InfoContainer,
  Level,
  AvatarsContainer,
  Avatar,
} from './styles';

const LevelCard = ({ image, level, characters }) => {
  const avatars = characters.map((character, index) => (
    <Avatar src={character.avatar} key={index} />
  ));

  return (
    <Container>
      <Image src={image} />
      <InfoContainer>
        <Level>{`Level ${level}`}</Level>
        <AvatarsContainer>{avatars}</AvatarsContainer>
      </InfoContainer>
    </Container>
  );
};

export default LevelCard;