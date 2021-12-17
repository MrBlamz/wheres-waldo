import { useHistory } from 'react-router';
import { changeUrlPath } from '../../helpers/historyAPI';
import { Image, TitleContainer, RedTitle, BlueTitle } from './styles';
import TopBar from '../TopBar';
import Spacer from '../Spacer';
import waldoImage from '../../assets/images/waldo.png';

const MainTopBar = () => {
  const history = useHistory();

  return (
    <TopBar>
      <Image src={waldoImage} alt={`Waldo's Face`} />
      <Spacer margin={'5px'} />
      <TitleContainer onClick={() => changeUrlPath(history, '/')}>
        <BlueTitle>Where's</BlueTitle>
        <Spacer margin={'3px'} />
        <RedTitle>Waldo?</RedTitle>
      </TitleContainer>
    </TopBar>
  );
};

export default MainTopBar;
