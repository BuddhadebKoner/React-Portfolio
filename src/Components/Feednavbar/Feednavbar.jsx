import React from 'react'
import './Feednavbar.css'
import { NavLink } from 'react-router-dom'

export default function Feednavbar() {


  return (
    <>
      <div className="feednavbar-container">
        <NavLink
          to={"/ExploreBuddhadebKoner/explore"}
          className={({ isActive, isPending }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          My Post
        </NavLink>
        <NavLink
          to={"/ExploreBuddhadebKoner/resumepage"}
          className={({ isActive, isPending }) =>
            isActive ?"nav-links-active" : "nav-links-normal"
          }
        >
          Resume
        </NavLink>

        <NavLink
          to={"/ExploreBuddhadebKoner/about"}
          className={({ isActive, isPending }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          About
        </NavLink>

        <NavLink
          to={"/ExploreBuddhadebKoner/feedback"}
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
