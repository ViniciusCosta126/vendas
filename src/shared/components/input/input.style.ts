import styled from 'styled-components/native';

import { theme } from '../../themes/theme';
import { Icon } from '../icon/Icon';
interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}
export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  padding-right: ${(props: ContainerInputProps) => (props.hasSecureTextEntry ? '52px' : '16px')};
  border-radius: 4px;
  border: 1px
    ${({ isError }: ContainerInputProps) =>
      isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 12px;
`;
