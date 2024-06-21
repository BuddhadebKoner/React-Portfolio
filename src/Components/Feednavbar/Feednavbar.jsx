import React from 'react'
import '../../Styles/Feednavbar.css'
import { NavLink } from 'react-router-dom'

export default function Feednavbar() {


  return (
    <>
      <div className="feednavbar-container">
        <NavLink
          to={"/explore"}
          className={({ isActive, isPending }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          My Post
        </NavLink>
        <NavLink
          to={"/resumepage"}
          className={({ isActive, isPending }) =>
            isActive ?"nav-links-active" : "nav-links-normal"
          }
        >
          Resume
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          About
        </NavLink>

        <NavLink
          to={"/feedback"}
          className={({ isActive, isPending }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          Feedback
        </NavLink>

      </div>
    </>
  )
}
