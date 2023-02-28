import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./mainPage.css";

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function MainPage() {
  return (
    <>
      <div>
        <marquee width="100%" behavior="alternate" bgcolor="yellow">
          ALERT ! This site is confidential and all information and data
          contained within it is protected and should not be shared or disclosed
          to unauthorized individuals
        </marquee>
      </div>
      <div
        className="mt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "blue",
          padding: "50px",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>
          <span style={{ color: "red", fontWeight: "bolder" }}>WELCOME !</span>
          <br />
          <br />
          <div>
            <marquee width="100%" behavior="alternate">
              To Our Employee Management Portal
            </marquee>
           
            
            
          </div>
        </h1>
      </div>

      
        <Link id="mainBtn" to="/signup">
          Get Started
        </Link>
     
    </>
  );
}

export default MainPage;
