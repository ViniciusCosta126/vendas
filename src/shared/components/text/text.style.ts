import styled from 'styled-components/native';

type ContainerTextProps = {
  color?: string;
  size: string;
  family: string;
};

export const ContainerText = styled.Text<ContainerTextProps>`
  ${({ color }) => (color ? `color:${color}` : '')};
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.family};
`;
