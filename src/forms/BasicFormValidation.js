import React, { useState } from "react";
import "./BasicForm.css"

const BasicFormValidation = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password }
      console.log(newEntry)
      setAllEntry([...allEntry, newEntry])
      console.log(setAllEntry);

      setEmail("");
      setPassword("");
    } else {
      alert("plz fill the form correctly");
    }
  }


  return (
    <div className="App form-container">
      <form action="" className="form" onSubmit={submitForm}>

        <div className="form-body">
          <label htmlFor="email" className="tag">Email</label>
          <input type="email" name="email" className="type-bar"
            autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-body">
          <label htmlFor="password" className="tag">Password</label>
          <input type="password" name="password" className="type-bar"
            autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="button-wrapper">
          <button type="submit" className="button">Login</button>
        </div>

      </form>

      <div>
        {
          allEntry.map((data, index) => {
            const { id, email, password } = data
            return (
              <div className="userData" key={id}>
                <p>{email}</p>
                <p>{password}</p>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}
export default BasicFormValidation;