import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const userData = {
    Users: [
      { id: 1, name: "Taimoor " },
      { id: 2, name: " Ali" },
      { id: 3, name: "Hamza" },
    ],
  };
  return (
    <div>
      <h1>Users List</h1>
      {userData.Users.map((user, i) => {
        return (
          <ul key={user.id}>
            <li>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default UserList;
