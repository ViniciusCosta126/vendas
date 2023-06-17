import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { ContainerText } from './text.style';
import { TextTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ type, color, ...props }: TextProps) => {
  const handleSize = useMemo(() => {
    switch (type) {
      case TextTypes.TITLE:
        return '32px';

      default:
        return '16px';
    }
  }, [type]);
  return <ContainerText size={handleSize} color={color} {...props} />;
};
export default Text;
