import React, { useEffect } from "react"
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../utils/userSlice"
import { useLoaderData } from "react-router"
import Header from "../components/Header"
import { getMovieTrailerVideo, getMoviesPlayingNow } from "../api/Movies"
import { addMoviesPlayingNow } from "../utils/movieSlice"
import TrailerContainer from "../components/TrailerContainer"
import MovieAndTVListContainer from "../components/MovieAndTVListContainer"
import { getTVAiringToday, getTVTrailerVideo } from "../api/TVShows"
import { addTVShowsAiringToday } from "../utils/tvSlice"
import { getTrendingToday } from "../api/Trending"
import { addTrendingToday, addTrendingTrailer } from "../utils/trendingSlice"

const Browse = () => {
  const dispatch = useDispatch()
  const { movies, trailerVideos, tvShows, trendingToday } = useLoaderData()
  useEffect(() => {
    dispatch(addMoviesPlayingNow(movies))
    dispatch(addTVShowsAiringToday(tvShows))
    dispatch(addTrendingToday(trendingToday))
    const id = trailerVideos.id
    const trailerVid = trailerVideos.results.filter(
      (video) => video.type == "Trailer"
    )

    const trailer = trailerVid.length > 0 ? trailerVid[0] : trailerVideos[0]
    dispatch(addTrendingTrailer({ trailer, id }))
  }, [])

  const trendingTrailer = useSelector((state) => state.trending.trendingTrailer)

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
      {trendingTrailer ? <TrailerContainer /> : null}
      <MovieAndTVListContainer />
    </div>
  )
}

const loader = async ({ request: { signal } }) => {
  const movies = await getMoviesPlayingNow({ signal })
  const tvShows = await getTVAiringToday({ signal })
  const trendingToday = await getTrendingToday({ signal })
  const index = Math.floor(Math.random() * (19 - 0 + 1)) + 0
  var trailerVideos
  if (trendingToday[index].media_type == "movie") {
    trailerVideos = await getMovieTrailerVideo(trendingToday[index].id)
  } else if (trendingToday[index].media_type == "tv") {
    trailerVideos = await getTVTrailerVideo(trendingToday[index].id)
  }

  return { movies, trailerVideos: trailerVideos.data, tvShows, trendingToday }
}

export const browseRoute = {
  loader,
  element: <Browse />,
}
