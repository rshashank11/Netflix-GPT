import React, { useEffect, useState } from "react"
import { netflixLogo } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice"
import { useChangeOnScroll } from "../hooks/useChangeOnScroll"

const Header = ({ children }) => {
  const isScrolling = useChangeOnScroll(20)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div
      className={`header z-20 sticky top-0
      bg-gradient-to-b from-black
      } flex justify-between w-full h-[90px] `}
    >
      <img className="h-auto ml-6 w-52" src={netflixLogo} alt="netflix-logo" />
      {children}
    </div>
  )
}

export default Header
