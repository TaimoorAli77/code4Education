import React, { useState } from "react";
import "./App.css";
const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [submitData, setSubmitData] = useState(null);

  const validateForm = () => {
    let isValid = true;
    const newError = {};
    if (!name.trim()) {
      newError.name = "Name is required!";
      isValid = false;
    }
    if (!email.trim()) {
      newError.email = "Email is required";
      isValid = false;
      // } else if (!/\s+@\.\s+/.test(email)) {
      //   newError.email = "Email is not valid";
      //   isValid = false;
    }
    if (!password.trim()) {
      newError.password = "Password is required ! ";
      isValid = false;
    } else if (password.length < 6) {
      newError.password = "Password length should be greater than 5";
      isValid = false;
    }
    setError(newError);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submittedData = {
        name,
        email,
        password,
      };
      console.log(submitData);
      setSubmitData(submittedData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {error.name && <span className="error">{error.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {error.email && <span className="error">{error.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error.password && <span className="error">{error.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitData && (
        <div>
          <h3>Submitted Data !</h3>
          <h3>Name: {submitData.name}</h3>
          <h3>Email: {submitData.email}</h3>
          <h3>Password: {submitData.password}</h3>
        </div>
      )}
    </>
  );
};

export default FormValidation;
