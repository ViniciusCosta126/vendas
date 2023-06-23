import { useDispatch } from 'react-redux';

import { UserType } from '../../../shared/types/userType';
import { useAppSelector } from '../../hooks';
import { setUserAction } from '.';
export const useUserReducer = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const setUser = (currentUser: UserType) => {
    dispatch(setUserAction(currentUser));
  };

  return {
    user,
    setUser,
  };
};
