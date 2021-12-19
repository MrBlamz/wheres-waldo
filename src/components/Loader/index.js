import React from 'react';
import { Wrapper, LoaderContainer } from './styles';

const Loader = () => {
  return (
    <Wrapper>
      <LoaderContainer>
        <div className='loader'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoaderContainer>
    </Wrapper>
  );
};

export default Loader;
