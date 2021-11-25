import { useState, useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { Container, Image } from './styles';
import GameTopBar from '../../components/GameTopBar';
import GameDropdownMenu from '../../components/GameDropdownMenu';
import { changeUrlPath } from '../../helpers/historyAPI';

const Game = ({ data }) => {
  const [isDropdownMenuActive, setIsDropdownMenuActive] = useState(false);
  const { x, y, mouseClickHandler } = useMousePosition();

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
      <GameTopBar characters={data.characters} changeUrlPath={changeUrlPath} />
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
