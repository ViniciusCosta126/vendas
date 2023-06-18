import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 8px;
  ${(props: ButtonContainerProps) => (props.margin ? `margin:${props.margin}` : '')};
`;
export const ButtonPrimary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props: ButtonContainerProps) => (props.margin ? `margin:${props.margin}` : '')};
  background-color: #9e30bc;
  border: 1px ${theme.colors.neutralTheme.white};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props: ButtonContainerProps) => (props.margin ? `margin:${props.margin}` : '')};
  background: transparent;
  border: 1px ${theme.colors.mainTheme.primary};
`;

export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: ${theme.colors.grayTheme.gray100};
`;
