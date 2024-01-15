import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getUser } from '../middleware/selectors/userSelector'
import { addUserAction, removeUserAction } from '../middleware/actions/userActions'

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

   const addUser = async (email, password) => {
    const data = {
      id: uuidv4(),
      email: email,
      password: password
    }

    return dispatch(addUserAction(data));
  }

  const removeUser = () => {
    return dispatch(removeUserAction());
  }

  return {
    user,
    addUser,
    removeUser,
  };
};