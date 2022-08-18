import React, { useState } from "react";

const SCE = () => {

  const [demo, setDemo] = useState("")

  return (
    <div>
      <h1>SHORT CIRCUIT EVALUATION</h1>

      <h2>OR OPERATOR</h2>
      <p>if data is true we will get left side value</p>
      <h3>{"Rahul" || "khandait"}</h3>
      <h3>{demo || "khandait"}</h3>
      <h3>{"khandait" || demo}</h3>

      <h2>AND OPERATOR</h2>
      <p>if data is true we will get right side value</p>
      <h3>{"Rahul" && "khandait"}</h3>
      <h3>{demo && "khandait"}</h3>
      <h3>{"khandait" || demo}</h3>
    </div>
  )
}
export default SCE;