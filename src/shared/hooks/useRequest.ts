import { useState } from 'react';

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { useUserReducer } from '../../store/reducers/useReducer/useUserReducer';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { RequestLoguin } from '../types/requestLogin';
import { RerturnLogin } from '../types/returnLogin';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const authRequest = async (body: RequestLoguin) => {
    setLoading(true);
    await connectionAPIPost<RerturnLogin>('http://localhost:8080/auth', body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuario ou senha invalidos',
        });
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
