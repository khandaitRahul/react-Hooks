import React, { useState, useEffect } from "react";

const UEChallenge = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      document.title = `chats(${count})`
    } else {
      document.title = `chats`
    }
  }, [count]);

  console.log("outside USEFFECTS")

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}
export default UEChallenge;