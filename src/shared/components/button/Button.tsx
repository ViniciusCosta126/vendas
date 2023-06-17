import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { ButtonContainer } from './button.style';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}
const Button = ({ ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props} margin={props.margin}>
      <Text type={'TITLE'} color={theme.colors.neutralTheme.white}>
        {props.title}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
