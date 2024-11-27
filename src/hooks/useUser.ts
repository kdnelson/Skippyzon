import { useAppDispatch } from './useBase';
import { addUserAction } from './../middleware/actions/userActions';

export const useUser = () => {
  const dispatch = useAppDispatch();

  const addUser = (value) => {
    const data = {
      value: value
    }
    return dispatch(addUserAction(data))
  }

  return {
    addUser,
  }
}
