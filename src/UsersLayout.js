import { NavLink, Outlet } from "react-router-dom";
import React from "react";


function UsersLayout() {
  return (
    <div>
       
      <nav>
        <ul>
          <li>
            <NavLink  to="/">Home</NavLink>
          </li>

          <li>
            <NavLink  to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
  
}

export default UsersLayout;