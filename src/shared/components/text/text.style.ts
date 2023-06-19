import styled from 'styled-components/native';

type ContainerTextProps = {
  color?: string;
  size: string;
  family: string;
  customMargin?: string;
};

export const ContainerText = styled.Text<ContainerTextProps>`
  ${({ color }: ContainerTextProps) => (color ? `color:${color}` : '')};
  ${({ customMargin }: ContainerTextProps) => (customMargin ? `margin:${customMargin}` : '')};
  font-size: ${(props: ContainerTextProps) => props.size};
  font-family: ${(props: ContainerTextProps) => props.family};
`;
