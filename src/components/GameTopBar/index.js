import { Fragment } from 'react';
import { useHistory } from 'react-router';
import TopBar from '../TopBar';
import { changeUrlPath } from '../../helpers/historyAPI';
import { CharactersContainer, Container, HomeButton } from './styles';
import CharacterItem from './CharacterItem';
import Spacer from '../Spacer';

const GameTopBar = ({ characters, selectLevel }) => {
  const history = useHistory();

  const characterItems = characters.map((character, index) => (
    <Fragment key={index}>
      <CharacterItem
        avatar={character.avatar}
        name={character.name}
        disabled={character.found}
      />
      <Spacer margin='10px' />
    </Fragment>
  ));

  return (
    <TopBar>
      <Container>
        <CharactersContainer>{characterItems}</CharactersContainer>
        <HomeButton
          primary
          onClick={() => {
            selectLevel(1);
            changeUrlPath(history, '/');
          }}
        >
          Return Home
        </HomeButton>
      </Container>
    </TopBar>
  );
};

export default GameTopBar;
