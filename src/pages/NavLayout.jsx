import React from "react"
import { Outlet, useNavigation } from "react-router"
import NavBar from "../components/NavBar"
import { ScrollRestoration } from "react-router-dom"
import Header from "../components/Header"

const NavLayout = () => {
  const { state } = useNavigation()
  return (
    <div className="text-white">
      <Header>
        <NavBar />
        <button className="mr-6">Sign Out</button>
      </Header>
      <ScrollRestoration />
      {state === "loading" ? (
        <div className="w-screen h-screen mx-auto mt-10 text-red text-2xl">
          Loading...
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default NavLayout
