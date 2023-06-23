import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserAction } from '../../store/reducers/useReducer';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { RequestLoguin } from '../types/requestLogin';
import { RerturnLogin } from '../types/returnLogin';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();

  const authRequest = async (body: RequestLoguin) => {
    setLoading(true);
    await connectionAPIPost<RerturnLogin>('http://192.168.0.107:8080/auth', body)
      .then((result) => {
        dispatch(setUserAction(result.user));
      })
      .catch(() => {
        setErrorMessage('Usuario ou senha invalidos');
      });
    setLoading(false);
  };
  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
