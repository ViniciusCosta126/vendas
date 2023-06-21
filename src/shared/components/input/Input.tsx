import { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import { ContainerInput, IconEye } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  customMargin?: string;
}
const Input = ({ customMargin, secureTextEntry, title, errorMessage, ...props }: InputProps) => {
  const [currentSecuryti, setCurrentSecurity] = useState<boolean>(!!secureTextEntry);
  const handleOnPressEye = () => {
    setCurrentSecurity((current) => !current);
  };
  return (
    <DisplayFlexColumn customMargin={customMargin}>
      {title && (
        <Text
          type={TextTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.grayTheme.gray100}
          customMargin={'0px 0px 4px 8px'}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          secureTextEntry={currentSecuryti}
          {...props}
          hasSecureTextEntry={secureTextEntry}
        />
        {secureTextEntry && (
          <IconEye
            name={currentSecuryti ? 'eye' : 'eye-blocked'}
            size={20}
            onPress={handleOnPressEye}
          />
        )}
      </View>
      {errorMessage && (
        <Text
          customMargin="4px 0px 0px 8px"
          type={TextTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
