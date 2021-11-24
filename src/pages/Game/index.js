import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useMousePosition from '../../hooks/useMousePosition';
import { Container, Image } from './styles';
import GameTopBar from '../../components/GameTopBar';
import GameDropdownMenu from '../../components/GameDropdownMenu';

const Game = ({ data }) => {
  const history = useHistory();
  const [isDropdownMenuActive, setIsDropdownMenuActive] = useState(false);
  const { x, y, mouseClickHandler } = useMousePosition();

  const changeUrlPath = (path) => {
    history.push(path);
  };

  const handleMouseClick = (event) => {
    const { id } = event.target;

    if (id === 'gameBoard') {
      mouseClickHandler(event);
      setIsDropdownMenuActive(true);
      return;
    }

    setIsDropdownMenuActive(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('click', handleMouseClick);
    };
  });

  return (
    <>
      <GameTopBar characters={data.characters} handleClick={changeUrlPath} />
      <Container onClick={handleMouseClick}>
        <Image src={data.image} alt='Board Picture' id='gameBoard' />
      </Container>
      {isDropdownMenuActive && (
        <GameDropdownMenu characters={data.characters} coordinates={{ x, y }} />
      )}
    </>
  );
};

export default Game;
