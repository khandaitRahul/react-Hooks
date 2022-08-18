import React from "react";

const UseStateObj = () => {

  const [object, setObject] = React.useState({
    name: "rahul", age: 24,
  });

  const changeObject = () => {
    setObject({ ...object, name: "summy" })
  }

  return (
    <>
      <h1>UseState With Object</h1>
      <h3>Name : {object.name} & age : {object.age}</h3>
      <button onClick={changeObject}>Update</button>
    </>
  )
}
export default UseStateObj;