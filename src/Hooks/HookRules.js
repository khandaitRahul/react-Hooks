//1. Always write it inside the component or function
//2. Component name must be PascalCase (First letter should be uppercase)
//3. we can directly import or we can directly write it using React.hookName
//4. Don't call hooks inside loops, conditions or nested functions.


import React from "react";
// import React, { useState } from "react";

const HookRules = () => {

  const [MyName, setMyName] = React.useState("HOOKS")

  return (
    <div>
      <h1>Hook Rules</h1>
      <h3>{MyName}</h3>
      <h3></h3>
    </div>
  )
}

export default HookRules;