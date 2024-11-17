import { useDispatch } from 'react-redux';
import { useAppSelector } from './base';
import { increment } from './../middleware/reducers/counterReducer';

export const useCounter = () => {
  const dispatch = useDispatch();
  const count = useAppSelector((state) => state.counter.value);
  
  const addIncrement = async (value) => {
    const data = {
      value: value
    }
    return dispatch(increment(data))
  }

  return {
    count,
    addIncrement,
  }
}