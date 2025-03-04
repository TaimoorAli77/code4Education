import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isSubscribed: "",
    role: "",
  });

  const changeHandle = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    console.log(checked, value, type, fieldValue, event.target, name);
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submit hony p browser refresh na ho   +    multiple events p jo click ho rha h wo single click chly.
    console.log("Form Data : ", formData);
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
    </>
  );
};

export default FormHandling;
