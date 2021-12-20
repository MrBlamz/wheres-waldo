import React from 'react';
import { Container, Device, Message } from './styles';

const RotateDeviceWarning = () => {
  return (
    <Container>
      <Device />
      <Message>Please rotate your device!</Message>
    </Container>
  );
};

export default RotateDeviceWarning;
