import React, { useEffect, useState } from "react";

const UseEffects1 = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `chats(${count})`
  });

  console.log("outside USEFFECTS")

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}
export default UseEffects1;