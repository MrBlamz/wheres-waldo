import { Container, Avatar, Name } from './styles';
import Spacer from '../../Spacer';

const MenuItem = ({ avatar, name }) => (
  <Container id='menuItem'>
    <Avatar src={avatar} alt='Character Avatar' />
    <Spacer margin='5px' />
    <Name>{name}</Name>
  </Container>
);

export default MenuItem;
