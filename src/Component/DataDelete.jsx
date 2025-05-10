import React, { useEffect, useState } from "react";

const DataDelete = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const deletethis = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setData(data.filter((d) => d.id !== id));
        console.log("Successfully deleted...!!!");
      });
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //   if (!response.ok) {
      //     throw new Error("Network response was not ok!");
      //   }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>loading ... </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>
                  <button onClick={() => deletethis(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataDelete;
