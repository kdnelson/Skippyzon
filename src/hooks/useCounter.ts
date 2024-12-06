import { useAppDispatch, useAppSelector } from './useBase';
import { addIncrementAction } from './../middleware/actions/counterActions';

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  const addIncrement = (count) => {
    const data = {
      count
    }
    return dispatch(addIncrementAction(data))
  }

  return {
    count,
    addIncrement,
  }
}