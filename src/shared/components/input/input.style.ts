import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 4px;
  border: 1px ${theme.colors.grayTheme.gray80};
`;
