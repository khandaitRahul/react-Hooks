import React, { useState } from "react";
import "./BasicForm.css"

const MulFormVal = () => {

  const [signup, setSignup] = useState({ username: "", email: "", contact: "", password: "" });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)

    setSignup({ ...signup, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const newRecords = { ...signup, id: new Date().getTime().toString() }
    console.log(records)
    setRecords([...records, newRecords])
    console.log(setRecords)

    setSignup({ username: "", email: "", contact: "", password: "" })

  }

  return (
    <div className="App form-container">
      <form action="" className="form" onSubmit={handleSubmit}>

        <div className="form-body">
          <label htmlFor="username" className="tag">username</label>
          <input type="text" autoComplete="off" name="username" className="type-bar"
            value={signup.username} onChange={handleInput} />
        </div>

        <div className="form-body">
          <label htmlFor="email" className="tag">Email</label>
          <input type="email" autoComplete="off" name="email" className="type-bar"
            value={signup.email} onChange={handleInput} />
        </div>

        <div className="form-body">
          <label htmlFor="contact" className="tag">contact</label>
          <input type="number" autoComplete="off" name="contact" className="type-bar"
            value={signup.contact} onChange={handleInput} />
        </div>

        <div className="form-body">
          <label htmlFor="password" className="tag">password</label>
          <input type="password" autoComplete="off" name="password" className="type-bar"
            value={signup.password} onChange={handleInput} />
        </div>

        <div className="button-wrapper">
          <button type="submit" className="button">Signup</button>
        </div>

      </form>

      <div>
        {
          records.map((data, index) => {
            const { id, username, email, contact, password } = data;
            return (
              <div className="showData" key={id}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{contact}</p>
                <p>{password}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default MulFormVal;