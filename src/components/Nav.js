import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Protected from "./Protected";

const Nav = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
    <div className="navigation">
      <li>
        <Link to="/">Login/Signup</Link>
      </li>
      <li>
        <Link to={user? "/dashboard": "/"}>Dashboard</Link>
      </li>
      {isAuthenticated ? (
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Nav;
