import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contextApi/AuthContext";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogout()
      .then(() => {
        alert("LogOut successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          {" "}
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        {user && (
          <>
            <a>
              <NavLink to="/my-applications">My Applications</NavLink>
            </a>
          </>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <button onClick={handleLogOut}>LogOut</button>
          ) : (
            <>
              <Link to={"/auth/register"}>
                {" "}
                <a className="btn">Register</a>
              </Link>
              <Link to={"/auth/login"}>
                {" "}
                <a className="btn">login</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
