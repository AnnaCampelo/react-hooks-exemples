import React, { useState, useCallback } from 'react'

const functionsSet = new Set();

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const incrementOtherCounter = () => {
    setCount2(count2 + 1)
  }

  // const increment = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])
  
  // const decrement = useCallback(() => {
  //   setCount(count - 1)
  // }, [count])
  
  // const incrementOtherCounter = useCallback(() => {
  //   setCount2(count2 + 1)
  // }, [count2])
  
  functionsSet.add(increment)
  functionsSet.add(decrement)
  functionsSet.add(incrementOtherCounter)
  
  console.log(functionsSet)

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  )
}

export default UseCallbackComponent
