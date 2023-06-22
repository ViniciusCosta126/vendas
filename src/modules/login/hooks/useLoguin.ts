import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
export const useLoguin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleOnPress = async () => {
    setLoading(true);
    await connectionAPIPost('http://192.168.0.107:8080/auth', {
      email,
      password,
    }).catch(() => {
      setErrorMessage('Usuario ou senha invalidos');
    });
    setLoading(false);
  };

  const handleOnChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(e.nativeEvent.text);
  };
  const handleOnChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(e.nativeEvent.text);
  };
  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};
