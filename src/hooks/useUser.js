import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getUserSelector } from '../middleware/selectors/userSelector'
import { addUserAction, removeUserAction } from '../middleware/actions/userActions'

export const useUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUserSelector)

  const addUser = async (email, password) => {
    const data = {
      id: uuidv4(),
      email,
      password
    }

    return dispatch(addUserAction(data))
  }

  const removeUser = () => {
    return dispatch(removeUserAction())
  }

  return {
    user,
    addUser,
    removeUser
  }
}
