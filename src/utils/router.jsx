import Login from "../pages/Login"
import { createBrowserRouter } from "react-router-dom"
import { browseRoute } from "../pages/Browse"

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        loader: ({ request: { signal } }) => {},
        element: <Login />,
      },
    ],
  },
  { path: "browse", ...browseRoute },
])
