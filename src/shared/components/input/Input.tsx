import { TextInputProps } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import { ContainerInput } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
}
const Input = ({ title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          type={TextTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.grayTheme.gray100}
          customMargin={'0px 0px 4px 8px'}
        >
          {title}
        </Text>
      )}
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  );
};

export default Input;
