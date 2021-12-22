import { useState, useEffect } from 'react';
import { useUpdateEffect } from 'react-use';
import { createTimestampInMilliseconds } from '../../api/firestore';
import { convertMillisecondsToSeconds } from '../../helpers/math';
import useMousePosition from '../../hooks/useMousePosition';
import useWindowOrientation from 'use-window-orientation';
import { Container, Image } from './styles';
import GameTopBar from '../../components/GameTopBar';
import DropDownMenu from '../../components/GameDropdownMenu';
import ScoreModal from '../../components/ScoreModal';
import RotateDeviceWarning from '../../components/RotateDeviceWarning';

const Game = ({ data, selectLevel }) => {
  const { image, level } = data;
  const { url, width, height } = image;
  const [timer, setTimer] = useState({});
  const [score, setScore] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [characters, setCharacters] = useState([...data.characters]);
  const [isDropdownMenuActive, setIsDropdownMenuActive] = useState(false);
  const [convertedImageClickCoordinates, setConvertedImageClickCoordinates] =
    useState({
      x: null,
      y: null,
    });
  const { x, y, mouseClickHandler } = useMousePosition();
  const { portrait } = useWindowOrientation();

  const startTimer = () => {
    const timestamp = createTimestampInMilliseconds();
    setTimer({ start: timestamp, end: null });
  };

  const endTimer = () => {
    const timestamp = createTimestampInMilliseconds();
    setTimer((prevState) => ({
      ...prevState,
      end: timestamp,
    }));
  };

  const calculateCompletionTime = (end, start) =>
    convertMillisecondsToSeconds(end - start);

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

  const markCharacterAsFound = (name) => {
    const newArray = characters.map((character) => {
      if (character.name === name) {
        const copy = { ...character, found: true };
        return copy;
      }

      return character;
    });

    setCharacters(newArray);
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
    startTimer();

    return () => {
      document.removeEventListener('click', handleMouseClick);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check if it's game over
  useUpdateEffect(() => {
    const isGameOver = characters.every(
      (character) => character.found === true
    );

    setIsDropdownMenuActive(false);

    if (isGameOver) {
      endTimer();
      setGameOver(true);
    }
  }, [characters]);

  useUpdateEffect(() => {
    const score = calculateCompletionTime(timer.end, timer.start);
    setScore(score);
  }, [gameOver]);

  // Restart timer when device changes orientation
  useUpdateEffect(() => {
    startTimer();
  }, [portrait]);

  return (
    <>
      {portrait ? (
        <RotateDeviceWarning />
      ) : (
        <>
          <GameTopBar characters={characters} selectLevel={selectLevel} />
          <Container>
            <Image src={url} alt='Board Picture' id='gameBoard' />
          </Container>
          {isDropdownMenuActive && (
            <DropDownMenu
              characters={characters}
              coordinates={{ x, y }}
              imageClickCoordinates={convertedImageClickCoordinates}
              markCharacterAsFound={markCharacterAsFound}
            />
          )}
          {gameOver && (
            <ScoreModal score={score} level={level} selectLevel={selectLevel} />
          )}
        </>
      )}
    </>
  );
};

export default Game;
