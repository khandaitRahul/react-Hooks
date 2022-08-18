import React from "react";

const UseStateArr = () => {
  const BioData = [
    {
      id: 0,
      myName: "RAHUL",
      age: 24
    },
    {
      id: 1,
      myName: "KHANDAIT",
      age: 23,
    },
    {
      id: 2,
      myName: "SUMMY",
      age: 24,
    }
  ]
  // console.log(BioData)

  const [array, setArray] = React.useState(BioData)
  // console.log(array, "array")

  const ClearArray = () => {
    setArray([]);
  }

  return (
    <>
      <h1>Use State Arrays (CHALLENGE-1)</h1>
      {
        array.map((data) => {
          return (
            <h3>Name : {data.myName} , Age : {data.age}</h3>
          )
        })
      }
      <button onClick={ClearArray}>CLEAR</button>
    </>
  )
}
export default UseStateArr;