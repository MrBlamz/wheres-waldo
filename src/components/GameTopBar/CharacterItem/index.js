import { Container, Avatar, Name } from './styles';

const CharacterItem = ({ avatar, name }) => (
  <Container>
    <Avatar src={avatar} />
    <Name>{name}</Name>
  </Container>
);

export default CharacterItem;
