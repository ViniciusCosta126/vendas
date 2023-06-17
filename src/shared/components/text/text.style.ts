import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  size?: string;
}
export const ContainerText = styled.Text<ContainerTextProps>`
  ${({ color }) => (color ? `color:${color}` : '')};
  font-size: ${(props) => props.size};
  font-family: Poppins-Italic;
`;
