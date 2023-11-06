import React from "react"
import { Provider } from "react-redux"
import store from "./utils/store"
import { RouterProvider } from "react-router"
import { router } from "./utils/router"

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
