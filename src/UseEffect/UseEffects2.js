//cleanUp function.

import React, { useEffect, useState } from "react";

const UseEffects2 = () => {

  const [width, setWidth] = useState(window.screen.width)

  const actualWidth = () => {
    console.log("width", window.innerWidth)
    setWidth(window.innerWidth);
  }


  useEffect(() => {
    console.log("add event")
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log("remove event")
      window.removeEventListener("resize", actualWidth);
    }
  })

  return (
    <div className="App">
      <h3>The Actual width size of the window is :</h3>
      <h1>{width}</h1>
    </div>
  )
}
export default UseEffects2;