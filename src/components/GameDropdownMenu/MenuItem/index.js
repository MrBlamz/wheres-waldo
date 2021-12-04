import { Container, Avatar, Name } from './styles';
import Spacer from '../../Spacer';

const MenuItem = ({
  avatar,
  name,
  characterCoordinates,
  clickCoordinates,
  markCharacterAsFound,
}) => {
  const isInsideRectangle = (rectangle, point) => {
    const { x1, x2, y1, y2 } = rectangle;
    const { x, y } = point;
    return x > x1 && x < x2 && y < y1 && y > y2;
  };

  const handleMouseClick = (event) => {
    // Prevent event triggering in dropdown menu
    event.stopPropagation();

    const isCharacter = isInsideRectangle(
      characterCoordinates,
      clickCoordinates
    );

    if (isCharacter) {
      markCharacterAsFound(name);
      // Check if it's game over
      // YES ? STOP TIMER AND ASK FOR NAME
      // NO ? DO NOTHING
    }
  };

  return (
    <Container onClick={handleMouseClick}>
      <Avatar src={avatar} alt='Character Avatar' />
      <Spacer margin='5px' />
      <Name>{name}</Name>
    </Container>
  );
};

export default MenuItem;
