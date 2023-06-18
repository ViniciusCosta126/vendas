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
      case TextTypes.TITLE_BOLD:
      case TextTypes.TITLE_SEMI_BOLD:
      case TextTypes.TITLE_LIGHT:
      case TextTypes.TITLE_REGULAR:
        return '24px';
      case TextTypes.SUB_TITLE_BOLD:
      case TextTypes.SUB_TITLE_SEMI_BOLD:
      case TextTypes.SUB_TITLE_LIGHT:
      case TextTypes.SUB_TITLE_REGULAR:
        return '20px';
      case TextTypes.PARAGRAPH_BOLD:
      case TextTypes.PARAGRAPH_SEMI_BOLD:
      case TextTypes.PARAGRAPH_LIGHT:
      case TextTypes.PARAGRAPH_REGULAR:
        return '14px';
      case TextTypes.PARAGRAPH_SMALL_BOLD:
      case TextTypes.PARAGRAPH_SMALL_SEMI_BOLD:
      case TextTypes.PARAGRAPH_SMALL_LIGHT:
      case TextTypes.PARAGRAPH_SMALL_REGULAR:
        return '10px';
      case TextTypes.BUTTON_BOLD:
      case TextTypes.BUTTON_SEMI_BOLD:
      case TextTypes.BUTTON_REGULAR:
      case TextTypes.BUTTON_LIGHT:
        return '18px';
      default:
        return '14px';
    }
  }, [type]);
  const renderfontFamily = useMemo(() => {
    switch (type) {
      case TextTypes.TITLE_BOLD:
      case TextTypes.BUTTON_BOLD:
      case TextTypes.SUB_TITLE_BOLD:
      case TextTypes.PARAGRAPH_BOLD:
      case TextTypes.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';

      case TextTypes.TITLE_SEMI_BOLD:
      case TextTypes.BUTTON_SEMI_BOLD:
      case TextTypes.SUB_TITLE_SEMI_BOLD:
      case TextTypes.PARAGRAPH_SEMI_BOLD:
      case TextTypes.PARAGRAPH_SMALL_SEMI_BOLD:
        return 'Poppins-SemiBold';

      case TextTypes.TITLE_LIGHT:
      case TextTypes.BUTTON_LIGHT:
      case TextTypes.SUB_TITLE_LIGHT:
      case TextTypes.PARAGRAPH_LIGHT:
      case TextTypes.PARAGRAPH_SMALL_LIGHT:
        return 'Poppins-Light';

      case TextTypes.TITLE_REGULAR:
      case TextTypes.BUTTON_REGULAR:
      case TextTypes.SUB_TITLE_REGULAR:
      case TextTypes.PARAGRAPH_REGULAR:
      case TextTypes.PARAGRAPH_SMALL_REGULAR:
      default:
        return 'Poppins-Regular';
    }
  }, [type]);
  return <ContainerText family={renderfontFamily} size={renderFontSize} color={color} {...props} />;
};
export default Text;
