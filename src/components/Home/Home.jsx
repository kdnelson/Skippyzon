import React from 'react'
import { useAppDispatch, useAppSelector } from './../../hooks/useCounter';
import { incremented } from './../../middleware/reducers/counterReducer';

const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(incremented());
  }

  return (
    <div className="container">
      <div className="cutter-main-banner-content">
        <h2>
          <div className="row justify-content-center">
            <button onClick={handleClick}>
              Count is: {count}
            </button>
          </div>
        </h2>
      </div>
    </div>
  )
}

export default Home
