import styled from 'styled-components/native';

interface DisplayProps {
  customMargin?: string;
}
export const DisplayFlexColumn = styled.View<DisplayProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: ${({ customMargin }: DisplayProps) => (customMargin ? customMargin : '0px')};
`;
