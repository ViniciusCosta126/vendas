import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { ContainerText } from './text.style';
import { TextTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ type, color, ...props }: TextProps) => {
  const renderFontSize = useMemo(() => {
    switch (type) {
      case TextTypes.TITLE_BOLD || TextTypes.TITLE_LIGHT || TextTypes.TITLE_REGULAR:
        return '24px';
      case TextTypes.SUB_TITLE_BOLD || TextTypes.SUB_TITLE_LIGHT || TextTypes.SUB_TITLE_REGULAR:
        return '20px';
      case TextTypes.PARAGRAPH_BOLD || TextTypes.PARAGRAPH_LIGHT || TextTypes.PARAGRAPH_REGULAR:
        return '14px';
      case TextTypes.PARAGRAPH_SMALL_BOLD ||
        TextTypes.PARAGRAPH_SMALL_LIGHT ||
        TextTypes.PARAGRAPH_SMALL_REGULAR:
        return '10px';
      case TextTypes.BUTTON_BOLD || TextTypes.BUTTON_LIGHT || TextTypes.BUTTON_REGULAR:
        return '18px';
      default:
        return '14px';
    }
  }, [type]);
  const renderfontFamily = useMemo(() => {
    switch (type) {
      case TextTypes.TITLE_BOLD ||
        TextTypes.BUTTON_BOLD ||
        TextTypes.SUB_TITLE_BOLD ||
        TextTypes.PARAGRAPH_BOLD ||
        TextTypes.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';

      case TextTypes.TITLE_LIGHT ||
        TextTypes.BUTTON_LIGHT ||
        TextTypes.SUB_TITLE_LIGHT ||
        TextTypes.PARAGRAPH_LIGHT ||
        TextTypes.PARAGRAPH_SMALL_LIGHT:
        return 'Poppins-Light';

      case TextTypes.TITLE_REGULAR ||
        TextTypes.BUTTON_REGULAR ||
        TextTypes.SUB_TITLE_REGULAR ||
        TextTypes.PARAGRAPH_REGULAR ||
        TextTypes.PARAGRAPH_SMALL_REGULAR:
        return 'Poppins-Regular';
      default:
        return 'Poppins-Regular';
    }
  }, [type]);
  return <ContainerText family={renderfontFamily} size={renderFontSize} color={color} {...props} />;
};
export default Text;
