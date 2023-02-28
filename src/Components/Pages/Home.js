import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './mainPage.css'
import { LoginState } from './../Atom/LoginState';
import { useRecoilState } from 'recoil';

function SearchFilter(props) {
  const [query, setQuery] = useState('');
  const [islogin, setIsLogin] = useRecoilState(LoginState);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(query);
  };

  return (
    <form className="mainsearch" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

function Home() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadUsers();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3003/users?q=${searchQuery}`);
    setUsers(result.data.reverse());
    console.log(result)
  };

  const DeleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="py-4">
      <Link to="/users/add" className="btn btn-primary mb-4">
        Add Employee
      </Link>
      <SearchFilter onSearch={handleSearch} />
      <div className="container">
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee UserName</th>
              <th scope="col">Employee Email</th>
              <th scope="col">Employee Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link
                    className="btn btn-primary "
                    style={{ margin: "3px" }}
                    to={`/users/${user.id}`}
                  >
                    View
                  </Link>

                  <Link
                    className="btn btn-warning"
                    style={{ margin: "3px" }}
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger"
                    style={{ margin: "3px" }}
                    onClick={() => DeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
