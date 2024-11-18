import { useAppDispatch, useAppSelector } from './useBase';
import { addIncrementAction } from './../middleware/actions/counterActions';

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const addIncrement = (value) => {
    const data = {
      value: value
    }
    return dispatch(addIncrementAction(data))
  }

  return {
    count,
    addIncrement,
  }
}