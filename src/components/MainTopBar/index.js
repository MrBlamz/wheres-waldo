import { Image, RedTitle, BlueTitle } from './styles';
import TopBar from '../TopBar';
import Spacer from '../Spacer';
import waldoImage from '../../assets/images/waldo.png';

const MainTopBar = () => (
  <TopBar>
    <Image src={waldoImage} alt={`Waldo's Face`} />
    <Spacer margin={'5px'} />
    <BlueTitle>Where's</BlueTitle>
    <Spacer margin={'3px'} />
    <RedTitle>Waldo?</RedTitle>
  </TopBar>
);

export default MainTopBar;
