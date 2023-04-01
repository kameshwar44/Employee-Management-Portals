import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { LoginState } from "../Atom/LoginState";

function Navbar() {
  const setIsLoginStatus = useSetRecoilState(LoginState);
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("currentUser"));
  const isLogin = useRecoilValue(LoginState)
  

  function LogOut() {
    setIsLoginStatus(false);
    navigate("/");
   
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{backgroundColor:"black"}}>
        <Link to="/">
          
          <div
            style={{ marginLeft: "5px", color: "white", fontWeight: "bolder" }}
          >
            Employee Management Portal
          </div>
        </Link>
        <div className="container " >
          <NavLink className="navbar-brand " exact to="/"></NavLink>
          <div className="collapse navbar-collapse d-flex justify-content-center ">
            <ul className="navbar-nav mr-auexact to">
              <li className="nav-item ">
                <NavLink
                  className="nav-link "
                  style={{ fontWeight: "bolder", marginRight: "160px" }}
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ fontWeight: "bolder", marginRight: "160px" }}
                  exact
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ fontWeight: "bolder", marginRight: "110px" }}
                  exact
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {isLogin ? (
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.fname}
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#" onClick={LogOut}>
                  Log out
                </a>
              </div>
            </div>
          ) : (
            <Link to="/signup" className="btn btn-outline-light">
              Signup
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
