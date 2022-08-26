import React, { useRef } from "react";

const UnControlledForm = () => {

  const name = useRef(null)
  const submitForm = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    const show = name.current.value;
  }

  return (
    <div className="App">
      <h1>unControlled</h1>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Enter NAME</label>
          <input type="text" id="name" ref={name} />
        </div>
        <button>Submit</button>
      </form>
      <p>{submitForm}</p>
    </div >
  )
}
export default UnControlledForm
