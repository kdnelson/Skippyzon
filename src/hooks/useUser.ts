import { useAppDispatch, useAppSelector } from './useBase';
import { v4 as uuidv4 } from 'uuid'
import { addUserAction, removeUserAction } from './../middleware/actions/userActions';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const email = useAppSelector((state) => state.user.email);
  const useraddress = useAppSelector((state) => state.user.useraddress);

  const addUser = async (email: string, password: string, username: string, useraddress: string) => {
    const data = {
      id: uuidv4(),
      email,
      password,
      username,
      useraddress,
    }

    return dispatch(addUserAction(data))
  }

  const removeUser = () => {
    return dispatch(removeUserAction())
  }

  return {
    username,
    email,
    useraddress,
    addUser,
    removeUser,
  }
}
