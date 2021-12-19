import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.primary : 'none'};
  color: ${(props) => (props.selected ? '#fff' : '#000')};

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 30vh;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Level = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AvatarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 22px;
  height: 100%;
  margin: 0 5px;
`;
