import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: blue;
  ${(props) => (props.margin ? `margin:${props.margin}` : '')};
`;
