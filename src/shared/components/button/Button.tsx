import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import { ButtonDisabled, ButtonPrimary, ButtonSecondary } from './button.style';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}
const Button = ({ title, margin, type, loading, disabled, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };
  const renderText = (color: string) => (
    <>
      <Text type={TextTypes.BUTTON_SEMI_BOLD} color={color}>
        {loading ? 'Enviando...' : title}
      </Text>
      {loading && <ActivityIndicator color={theme.colors.neutralTheme.white} />}
    </>
  );

  if (disabled) {
    return <ButtonDisabled>{renderText(theme.colors.neutralTheme.white)}</ButtonDisabled>;
  }
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );

    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonPrimary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.neutralTheme.white)}
        </ButtonPrimary>
      );
  }
};

export default Button;
