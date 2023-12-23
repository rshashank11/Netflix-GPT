import React, { useEffect, useState } from "react"
import { netflixLogo } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
// import { auth } from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice"
import { useChangeOnScroll } from "../hooks/useChangeOnScroll"
import { Link } from "react-router-dom"

const Header = ({ children }) => {
  const isScrolling = useChangeOnScroll(20)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user !== null) {
  //       const { uid, email, displayName } = user
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
  //       navigate("/browse")
  //     } else {
  //       dispatch(removeUser())
  //       navigate("/")
  //     }
  //   })

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])

  return (
    <div
      className={`header z-20 sticky top-0 transition-all duration-500 ${
        isScrolling ? "bg-black" : "bg-gradient-to-b from-black"
      }
       flex justify-between w-full h-[90px]  `}
    >
      <Link to="/browse">
        <img
          className="h-auto ml-6 w-52"
          src={netflixLogo}
          alt="Netflix Logo"
        />
      </Link>
      {children}
    </div>
  )
}

export default Header
