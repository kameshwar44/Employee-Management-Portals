import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewUsers() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`https://employe-management-db-json.onrender.com/users/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <Link className="btn btn-primary mt-3 " to="/">
        Back To Home
      </Link>
      <h1 className="py-4">User Id: {id}</h1>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <table class="table table-sm"  className="table border shadow">
          <thead className="table-primary">
            <tr>
              <th scope="col">NAME: </th>
              <th scope="col">{user.name}</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">USERNAME:</th>
              <td>{user.username}</td>
             
            </tr>
            <tr>
              <th scope="row">EMAIL:</th>
              <td>{user.email}</td>
             
            </tr>
            <tr>
              <th scope="row">SALARY:</th>
              <td>{user.Salary}</td>
             
            </tr>
            <tr>
              <th scope="row">PHONE NO:</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th scope="row">WEBSITE :</th>
              <td>{user.website}</td>
            </tr>
          
        
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewUsers;
