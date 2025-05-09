import React from "react";
import { useParams } from "react-router-dom";
const UserProfile = () => {
  const userData = {
    Users: [
      { id: 1, name: "Taimoor " },
      { id: 2, name: " Ali" },
      { id: 3, name: "Hamza" },
    ],
  };
  const { userId } = useParams();
  const parsedId = parseInt(userId);
  const user = userData.Users.find((user) => user.id === parsedId);
  console.log(user, parsedId);
  return (
    <div>
      {user ? (
        <div>
          <p>Id : {user.id}</p> <p>Name:{user.name}</p>
        </div>
      ) : (
        <p>User Not Found</p>
      )}
    </div>
  );
};

export default UserProfile;
