import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex items-center">
      <ul className="flex gap-8 font-light">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/browse"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/tv-shows"
          >
            TV Shows
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
