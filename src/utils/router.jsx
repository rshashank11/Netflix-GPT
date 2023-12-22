// import Login from "../pages/Login"
import { Navigate, createBrowserRouter } from "react-router-dom"
import { browseRoute } from "../pages/Browse"
import { detailsRoute } from "../pages/Details"
import { moviesRoute } from "../pages/Movies"
import { tvShowsRoute } from "../pages/TVShows"
import NavLayout from "../pages/NavLayout"
// import GPT from "../pages/GPT"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/browse" />,
      },

      // {
      //   path: "login",
      //   loader: ({ request: { signal } }) => {},
      //   element: <Login />,
      // },
      // { path: "gpt", element: <GPT /> },
      { path: "browse", ...browseRoute },
      { path: "movies", ...moviesRoute },
      { path: "tv-shows", ...tvShowsRoute },
      { path: ":mediaType/:id", ...detailsRoute },
    ],
  },
])
