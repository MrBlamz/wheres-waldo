import { Fragment } from 'react';
import TopBar from '../TopBar';
import { CharactersContainer, Container, HomeButton } from './styles';
import CharacterItem from './CharacterItem';
import Spacer from '../Spacer';

const GameTopBar = ({ characters, handleClick }) => {
  const characterItems = characters.map((character, index) => (
    <Fragment key={index}>
      <CharacterItem avatar={character.avatar} name={character.name} />
      <Spacer margin='10px' />
    </Fragment>
  ));

  return (
    <TopBar>
      <Container>
        <CharactersContainer>{characterItems}</CharactersContainer>
        <HomeButton primary onClick={() => handleClick('/')}>
          Return Home
        </HomeButton>
      </Container>
    </TopBar>
  );
};

export default GameTopBar;
