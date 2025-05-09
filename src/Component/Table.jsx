// import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    //   setData(res);
    //   console.log(res);
    // });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setLoading(false);
      }).catch((err)=>console.log(err))
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? data.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                  </tr>
                );
              })
            : "loading..."}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
