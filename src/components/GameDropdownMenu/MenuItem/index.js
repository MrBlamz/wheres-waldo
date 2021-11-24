import { Container, Avatar, Name } from './styles';
import Spacer from '../../Spacer';

const MenuItem = ({ avatar, name }) => (
  <Container
    // TODO - Check character coords and name on firebase server
    onClick={(e) => {
      e.stopPropagation();
      console.log(name);
    }}
  >
    <Avatar src={avatar} alt='Character Avatar' />
    <Spacer margin='5px' />
    <Name>{name}</Name>
  </Container>
);

export default MenuItem;
