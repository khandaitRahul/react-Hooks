import React from "react";
import HookRules from "./HookRules";
import SCE from "./ShortCircuitEvaluation";
import UseState from "./UseState";
import UseStateArr from "./UseStateArr";
import UseStateArray from "./UseStateArray";
import UseStateObj from "./UseStateObj";

const RootHooks = () => {
  return (
    <div className="App">
      <UseState />
      <hr></hr>
      <HookRules />
      <hr></hr>
      <UseStateArr />
      <hr></hr>
      <UseStateObj />
      <hr></hr>
      <UseStateArray />
      <hr></hr>
      <SCE />
    </div>
  )
}
export default RootHooks;