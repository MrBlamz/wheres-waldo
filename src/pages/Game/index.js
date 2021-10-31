import { Container, Image } from './styles';
import GameTopBar from '../../components/GameTopBar';
import { useHistory } from 'react-router-dom';

const Game = ({ data }) => {
  const history = useHistory();

  const changeUrlPath = (path) => {
    history.push(path);
  };

  return (
    <>
      <GameTopBar characters={data.characters} handleClick={changeUrlPath} />
      <Container>
        <Image src={data.image} alt='Game Picture' />
      </Container>
    </>
  );
};

export default Game;
