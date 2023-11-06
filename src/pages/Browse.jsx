import React, { useEffect } from "react"
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../utils/userSlice"
import { useLoaderData } from "react-router"
import Header from "../components/Header"
import { getMoviesPlayingNow, getTrailerVideo } from "../api/Movies"
import { addMovieTrailer, addMoviesPlayingNow } from "../utils/movieSlice"
import TrailerContainer from "../components/TrailerContainer"
import MovieAndTVListContainer from "../components/MovieAndTVListContainer"
import { getTVAiringToday } from "../api/TVShows"
import { addTVShowsAiringToday } from "../utils/tvSlice"

const Browse = () => {
  const dispatch = useDispatch()
  const { movies, videos, tvShows } = useLoaderData()

  useEffect(() => {
    dispatch(addMoviesPlayingNow(movies))
    dispatch(addTVShowsAiringToday(tvShows))
    const id = videos.data.id
    const trailerVideos = videos.data.results.filter(
      (video) => video.type == "Trailer"
    )
    const trailer = trailerVideos.length > 0 ? trailerVideos[0] : videos[0]
    dispatch(addMovieTrailer({ trailer, id }))
  }, [])

  const moviesPlayingNow = useSelector((state) => state.movie.moviesPlayingNow)

  const signOutHandler = () => {
    signOut(auth)
      .then(dispatch(removeUser(null)))
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="text-white">
      <Header>
        <button className="mr-6" onClick={signOutHandler}>
          Sign Out
        </button>
      </Header>
      {moviesPlayingNow.length ? <TrailerContainer /> : null}
      <MovieAndTVListContainer />
    </div>
  )
}

const loader = async ({ request: { signal } }) => {
  const movies = await getMoviesPlayingNow({ signal })
  const tvShows = await getTVAiringToday({ signal })
  const index = Math.floor(Math.random() * (19 - 0 + 1)) + 0
  const videos = await getTrailerVideo(movies[index].id)
  return { movies, videos, tvShows }
}

export const browseRoute = {
  loader,
  element: <Browse />,
}
