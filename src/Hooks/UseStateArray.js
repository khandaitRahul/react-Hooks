import React from "react";

const UseStateArray = () => {
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

  const removeElement = (id) => {
    alert("are u sure..??");
    const newArray = array.filter((data) => {
      return (
        data.id !== id
      )
    })
    setArray(newArray);
  }

  return (
    <>
      <h1>Use State Arrays (CHALLENGE-2)</h1>
      {
        array.map((data, index) => {
          return (
            <h3 key={data.id}>Name : {data.myName} , Age : {data.age}
              <button onClick={() => removeElement(data.id)}>REMOVE</button>
            </h3>
          )
        })
      }
      <button onClick={ClearArray}>CLEAR</button>
    </>
  )
}
export default UseStateArray;