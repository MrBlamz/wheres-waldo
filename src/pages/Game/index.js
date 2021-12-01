import { useState, useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { Container, Image } from './styles';
import GameTopBar from '../../components/GameTopBar';
import DropDownMenu from '../../components/GameDropdownMenu';
import { changeUrlPath } from '../../helpers/historyAPI';

const Game = ({ data }) => {
  const { characters, image } = data;
  const { url, width, height } = image;
  const [isDropdownMenuActive, setIsDropdownMenuActive] = useState(false);
  const [convertedImageClickCoordinates, setConvertedImageClickCoordinates] =
    useState({
      x: null,
      y: null,
    });
  const { x, y, mouseClickHandler } = useMousePosition();

  const getConvertedClickCoordinates = (
    event,
    originalWidth,
    originalHeight
  ) => {
    // Image element
    const gameBoard = document.getElementById('gameBoard');
    const rect = gameBoard.getBoundingClientRect();

    // Calculated Ratio (Displayed image size divided by original image size)
    const widthRatio = rect.width / originalWidth;
    const heightRatio = rect.height / originalHeight;

    // Get clicked coordinate (Displayed image size coordinates)
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;

    // Convert displayed image size coords to original size coordinates
    const clickedX = Math.round((relativeX / widthRatio) * 100) / 100;
    const clickedY = Math.round((relativeY / heightRatio) * 100) / 100;

    return { x: clickedX, y: clickedY };
  };

  const handleMouseClick = (event) => {
    const { id } = event.target;

    if (id === 'gameBoard') {
      mouseClickHandler(event);
      setIsDropdownMenuActive(true);

      const convertedClickCoordinates = getConvertedClickCoordinates(
        event,
        width,
        height
      );

      setConvertedImageClickCoordinates(convertedClickCoordinates);
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
      <GameTopBar characters={characters} changeUrlPath={changeUrlPath} />
      <Container>
        <Image src={url} alt='Board Picture' id='gameBoard' />
      </Container>
      {isDropdownMenuActive && (
        <DropDownMenu
          characters={characters}
          coordinates={{ x, y }}
          imageClickCoordinates={convertedImageClickCoordinates}
        />
      )}
    </>
  );
};

export default Game;
