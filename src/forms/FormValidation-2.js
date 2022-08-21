import React, { useEffect, useState } from "react";
import "./BasicForm.css"

const FormValidation = () => {

  const initialValues = { username: "", email: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)


  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value })
    console.log(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values)
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex = {}
    if (!values.username) {
      errors.username = "username is required"
    }
    if (!values.email) {
      errors.email = "email is required"
    }
    if (!values.password) {
      errors.password = "password is requied"
    }
    return errors;
  }

  return (
    <div className="App form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="header">Login Form</h1>

        <div className="divider"></div>

        <div className="form-body">
          <label htmlFor="username" className="tag">username</label>
          <input type="text" name="username" className="type-bar" autoComplete="off"
            placeholder="username" value={values.username} onChange={handleChange} />
        </div>

        <div className="form-body">
          <label htmlFor="email" className="tag">Email</label>
          <input type="email" name="email" className="type-bar" autoComplete="off"
            placeholder="Email" value={values.email} onChange={handleChange} />
        </div>

        <div className="form-body">
          <label htmlFor="password" className="tag">password</label>
          <input type="password" name="password" className="type-bar" autoComplete="off"
            placeholder="password" value={values.password} onChange={handleChange} />
        </div>

        <div className="button-wrapper">
          <button type="submit" className="button">Signup</button>
        </div>

      </form>
      <pre>{JSON.stringify(values, undefined, 2)}</pre>
    </div>
  )
}
export default FormValidation;