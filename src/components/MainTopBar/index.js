import { Image, TitleContainer, RedTitle, BlueTitle } from './styles';
import TopBar from '../TopBar';
import Spacer from '../Spacer';
import waldoImage from '../../assets/images/waldo.png';

const MainTopBar = ({ handleClick }) => (
  <TopBar>
    <Image src={waldoImage} alt={`Waldo's Face`} />
    <Spacer margin={'5px'} />
    <TitleContainer onClick={() => handleClick('/')}>
      <BlueTitle>Where's</BlueTitle>
      <Spacer margin={'3px'} />
      <RedTitle>Waldo?</RedTitle>
    </TitleContainer>
  </TopBar>
);

export default MainTopBar;
