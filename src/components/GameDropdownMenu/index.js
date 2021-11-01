import MenuItem from './MenuItem';
import { Container } from './styles';

const GameDropdownMenu = ({ characters, coordinates }) => {
  const items = characters.map((character, index) => (
    <MenuItem key={index} avatar={character.avatar} name={character.name} />
  ));

  return (
    <Container style={{ top: coordinates.y, left: coordinates.x }}>
      {items}
    </Container>
  );
};

export default GameDropdownMenu;
