import React from 'react'
import { useCounter } from './../../hooks';

const Home = () => {
  const { count, addIncrement } = useCounter()

  function handleClick() {
    addIncrement(1)
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
