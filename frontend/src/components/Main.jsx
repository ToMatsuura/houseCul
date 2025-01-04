import React, { useState } from 'react'
import "./Main.css"

const Main = () => {
  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(count + 1)
  }

  return (
    <>
    <div>
      main
    </div>
    <button onClick={handleClick}>Your click{count}</button>

    </>
  )
}

export default Main;
