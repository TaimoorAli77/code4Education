import React, { useState } from "react";

const NewDataPost = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
  });
  const AddData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const submitFunction = (e) => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/todos";
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then((res) => {
        console.log(data.id);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={submitFunction}>
        <input
          type="text"
          name="id"
          value={data.id}
          onChange={(e) => {
            AddData(e);
          }}
        />
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={(e) => {
            AddData(e);
          }}
        />
        <button type="submit">Add data</button>
      </form>
    </div>
  );
};

export default NewDataPost;
