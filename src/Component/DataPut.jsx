import React, { useEffect, useState } from "react";

const DataPut = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    id: 2,
    title: "",
    completed: "",
  });
  const AddData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const submitFunction = (e) => {
    e.preventDefault();
    console.log(data);
    const idd = data.id;

    const options = {
      method: "PUT",
      headeres: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const url = `https://jsonplaceholder.typicode.com/todos/${idd}`;
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("post suucessfully updated", data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    const idd = data.id;
    const url = `https://jsonplaceholder.typicode.com/todos/${idd}`;
    console.log(url);
    console.log(data);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("post suucessfully updated", data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
    // };
  }, [data.id]);
  return (
    <div>
      {loading ? "loading..." : ""}

      <form onSubmit={submitFunction}>
        <input
          type="text"
          name="completed"
          value={data.completed}
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

export default DataPut;
