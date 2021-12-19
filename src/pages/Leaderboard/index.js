import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { changeUrlPath } from '../../helpers/historyAPI';
import { fetchLeaderboard } from '../../api/firestore';
import MainTopBar from '../../components/MainTopBar';
import Spacer from '../../components/Spacer';
import LevelCard from '../../components/LevelCard';
import Board from '../../components/Leaderboard';
import {
  Container,
  Header,
  Title,
  ButtonsContainer,
  Button,
  LevelCardsContainer,
} from './styles';
import Loader from '../../components/Loader';

const Leaderboard = ({ data, selectedLevelData, selectLevel }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(
    selectedLevelData ? selectedLevelData.level : 1
  );
  const [selectedLevelLeaderboardData, setSelectedLevelLeaderboardData] =
    useState([]);

  const handleLevelCardClick = (level) => {
    selectLevel(level);
    setSelectedLevel(level);
  };

  const levelCards = data.map((item) => {
    const { image, level, id } = item;
    return (
      <LevelCard
        key={id}
        image={image.url}
        level={level}
        onClick={() => handleLevelCardClick(level)}
        selected={selectedLevel === level}
      />
    );
  });

  useEffect(() => {
    setIsLoading(true);
    fetchLeaderboard()
      .then((data) => {
        setLeaderboardData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    setSelectedLevelLeaderboardData(
      leaderboardData
        .filter((doc) => doc.level === selectedLevel)
        .sort((a, b) => a.score - b.score)
    );
  }, [selectedLevel, leaderboardData]);

  return (
    <>
      <MainTopBar selectLevel={selectLevel} />
      <Container>
        <Header>
          <Title>Leaderboard</Title>
          <ButtonsContainer>
            <Button primary onClick={() => changeUrlPath(history, '/game')}>
              Play This Level
            </Button>
            <Spacer margin={'0.5rem'} />
            <Button
              secondary
              onClick={() => {
                selectLevel(1);
                changeUrlPath(history, '/');
              }}
            >
              Back To Home
            </Button>
          </ButtonsContainer>
          <LevelCardsContainer>{levelCards}</LevelCardsContainer>
        </Header>
        <Spacer margin={'2rem'} />
        {isLoading ? (
          <Loader />
        ) : (
          <Board
            headerData={['Name', 'Time (Seconds)']}
            data={selectedLevelLeaderboardData}
          />
        )}
      </Container>
    </>
  );
};

export default Leaderboard;
