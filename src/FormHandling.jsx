import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isSubscribed: "",
    role: "",
  });

  const changeHandle = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    console.log(inputValue);
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={changeHandle}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandle}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={formData.password}
            onChange={changeHandle}
          />
        </div>
        <div>
          <label htmlFor="isSubscribed">Subscribe:</label>
          <input
            type="checkbox"
            name="isSubscribed"
            id="isSubscribed"
            value={formData.isSubscribed}
            onChange={changeHandle}
          />
        </div>
        <div>
          <label htmlFor="role">role:</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={changeHandle}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
        <button>submit</button>
      </form>
      <h1>{formData.username}</h1>
    </>
  );
};

export default FormHandling;
