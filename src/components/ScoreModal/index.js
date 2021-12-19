import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createDocWithRandomID } from '../../api/firestore';
import { changeUrlPath } from '../../helpers/historyAPI';
import Spacer from '../Spacer';
import {
  Background,
  Container,
  Header,
  HeaderText,
  Modal,
  InputWrapper,
  Text,
  InputContainer,
  Label,
  Input,
  Error,
  ButtonContainer,
  Button,
} from './styles';

const ScoreModal = ({ score, level }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const { width, height } = document
    .querySelector('.App')
    .getBoundingClientRect();

  const handleInputChange = (event) => {
    setError(false);
    setUsername(event.target.value);
  };

  const handleSubmit = async () => {
    if (!username.length) {
      setError(true);
      return;
    }

    await createDocWithRandomID('leaderboard', {
      level,
      username,
      score,
    });

    changeUrlPath(history, '/leaderboard');
  };

  return (
    <>
      <Background width={width} height={height} />
      <Container>
        <Modal>
          <Header>
            <HeaderText>You finished in {score} seconds!</HeaderText>
          </Header>
          <InputWrapper>
            <Text>
              Enter the name you want to be identified by in the leaderboard.
            </Text>
            <InputContainer>
              <Label htmlFor='name-input'>Username</Label>
              <Input
                type='text'
                name='name-input'
                id='name-input'
                value={username}
                onChange={handleInputChange}
              />
              {error && <Error>Your username cannot be empty!</Error>}
            </InputContainer>
          </InputWrapper>
          <ButtonContainer>
            <Button primary onClick={() => changeUrlPath(history, '/')}>
              Cancel
            </Button>
            <Spacer margin={'0.5rem'} />
            <Button secondary onClick={handleSubmit}>
              Submit Score
            </Button>
          </ButtonContainer>
        </Modal>
      </Container>
    </>
  );
};

export default ScoreModal;
