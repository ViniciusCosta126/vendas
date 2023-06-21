import React from 'react';
import { Alert, Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';

import { theme } from '../../themes/theme';
import Button from '../button/Button';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import { ContainerModal, IconCloseModal } from './modal.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onRequestClose: () => void;
}
const Modal = ({ title, text, onRequestClose, ...props }: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onRequestClose();
      }}
      {...props}
    >
      <ContainerModal>
        <Text type={TextTypes.PARAGRAPH_SEMI_BOLD} color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Text>{text}</Text>
        <IconCloseModal name="cross" onPress={onRequestClose} size={14} />
        <Button title="OK" onPress={onRequestClose} />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
