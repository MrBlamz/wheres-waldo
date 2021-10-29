import { Container, Image, RedTitle, BlueTitle } from './styles';
import Spacer from '../Spacer';
import waldoImage from '../../assets/images/waldo.png';

const TopBar = () => (
  <Container>
    <Image src={waldoImage} alt={`Waldo's Face`} />
    <Spacer margin={'5px'} />
    <BlueTitle>Where's</BlueTitle>
    <Spacer margin={'3px'} />
    <RedTitle>Waldo?</RedTitle>
  </Container>
);

export default TopBar;
