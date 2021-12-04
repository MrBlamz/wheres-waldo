import { Container, Avatar, Name } from './styles';

const CharacterItem = ({ avatar, name, disabled }) => (
  <Container disabled={disabled}>
    <Avatar src={avatar} />
    <Name>{name}</Name>
  </Container>
);

export default CharacterItem;
