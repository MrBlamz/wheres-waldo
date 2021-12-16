import React from 'react';
import { useHistory } from 'react-router-dom';
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
  ButtonContainer,
  Button,
} from './styles';

const ScoreModal = ({ score }) => {
  const history = useHistory();
  const { width, height } = document
    .querySelector('.App')
    .getBoundingClientRect();

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
              <Input type='text' name='name-input' id='name-input' />
            </InputContainer>
          </InputWrapper>
          <ButtonContainer>
            <Button primary onClick={() => changeUrlPath(history, '/')}>
              Cancel
            </Button>
            <Spacer margin={'0.5rem'} />
            <Button secondary>Submit Score</Button>
          </ButtonContainer>
        </Modal>
      </Container>
    </>
  );
};

export default ScoreModal;
