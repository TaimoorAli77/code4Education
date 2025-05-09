import React from "react";
import { useSearchParams } from "react-router-dom";

const GetUrlP = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const namee = searchParams.get("name");
  const category = searchParams.get("cat");
  const country = searchParams.get("country");

  return (
    <div>
      <h1>Get URL Info</h1>
      <h2>Name : {namee}</h2>
      <h2>Category : {category}</h2>
      <h2>country:{country}</h2>
      <button
        onClick={() => {
          setSearchParams({
            name: "Fawad Aslam",
            cat: "fashion",
            country: "China",
          });
        }}
      >
        Update Url Params Value
      </button>

      <input
        type="text"
        onChange={(e) =>
          setSearchParams({
            gym: e.target.value,
            name: "Fawad Aslam",
            cat: "fashion",
            country: "China",
          })
        }
      ></input>
    </div>
  );
};

export default GetUrlP;
