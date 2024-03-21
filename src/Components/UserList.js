import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]); 
useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") 
      .then((res) => setUsers(res.data)) 
      .catch((err) => console.log(err)); 
  }, []); 

return (
    <div
    style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "10px",
        gap: "10px",
    }}
    >
    {users.map((el) => (
        <UserCard key={el.id} user={el} />
    ))}
    </div>
);
};

export default UsersList;
