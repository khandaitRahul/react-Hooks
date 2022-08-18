import React, { useState } from "react";

const UseState = () => {

  // console.log(useState("RAHUL"))
  // let Name = useState("Rahul")[0];
  // console.log(Name)

  const [name, setName] = useState("MyName")

  const changeName = () => {
    let val = name;
    (val === "MyName" ? setName("RAHUL") : setName("MyName"))
    // if (val === "MyName") {
    //   setName("RAHUL");
    // }
    // else {
    //   setName("MyName")
    // }

  }
  console.log(name)


  return (
    <div>
      <h1>UseState Hooks</h1>
      <h3>{name}</h3>
      <button onClick={changeName}>On Click</button>
    </div>
  )
}

export default UseState;