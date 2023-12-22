import React, { useEffect } from "react"
// import { auth } from "../utils/firebase"
// import { signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
// import { removeUser } from "../utils/userSlice"
import { useLoaderData, useNavigation } from "react-router"
import Header from "../components/Header"
import { getMovieTrailerVideo, getMoviesPlayingNow } from "../api/Movies"
import { addMoviesPlayingNow } from "../utils/movieSlice"
import TrailerContainer from "../components/TrailerContainer"
import MovieAndTVListContainer from "../components/MovieAndTVListContainer"
import { getTVAiringToday, getTVTrailerVideo } from "../api/TVShows"
import { addTVShowsAiringToday } from "../utils/tvSlice"
import { getTrendingToday } from "../api/Trending"
import { addTrendingToday, addTrendingTrailer } from "../utils/trendingSlice"
import NavBar from "../components/NavBar"
import MovieOrTVList from "../components/MovieOrTVList"

const Browse = () => {
  const { state } = useNavigation()

  const dispatch = useDispatch()
  const { movies, trailerVideos, tvShows, trendingToday } = useLoaderData()
  useEffect(() => {
    dispatch(addMoviesPlayingNow(movies))
    dispatch(addTVShowsAiringToday(tvShows))
    dispatch(addTrendingToday(trendingToday))
    const id = trailerVideos.id && trailerVideos.id
    const trailerVid = trailerVideos.results.filter(
      (video) => video.type == "Trailer"
    )
    const trailer =
      trailerVid.length > 0 ? trailerVid[0] : trailerVideos.results[0]
    dispatch(addTrendingTrailer({ trailer, id }))
  }, [movies, trailerVideos, tvShows, trendingToday])
  // const signOutHandler = () => {
  //   signOut(auth)
  //     .then(dispatch(removeUser(null)))
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  const trendingTodayList = useSelector((state) => state.trending.trendingToday)
  const moviesPlayingNow = useSelector((state) => state.movie.moviesPlayingNow)
  const tvShowsAiringToday = useSelector((state) => state.tv.tvShowsAiringToday)
  const { id, trailer } = useSelector((state) => state.trending.trendingTrailer)
  return (
    <>
      <div className="text-white">
        {id &&
          trendingTodayList.map((item) => {
            if (item.id === id) {
              return (
                <TrailerContainer
                  key={id}
                  details={item}
                  trailerDetail={trailer}
                  trailerId={id}
                />
              )
            }
          })}
        <MovieAndTVListContainer>
          <div className="relative -mt-52 z-10 bg-gradient-to-t from-black">
            <MovieOrTVList
              title={"Trending Today"}
              listData={trendingTodayList}
            />
          </div>
          <MovieOrTVList
            mediaType={"movie"}
            title={"Now Playing Movies"}
            listData={moviesPlayingNow}
          />
          <MovieOrTVList
            mediaType={"tv"}
            title={"TV Shows Airing Today"}
            listData={tvShowsAiringToday}
          />
        </MovieAndTVListContainer>
      </div>
    </>
  )
}

const loader = async ({ request: { signal } }) => {
  const movies = await getMoviesPlayingNow({ signal })
  const tvShows = await getTVAiringToday({ signal })
  const trendingToday = await getTrendingToday({ signal })
  const index = Math.floor(Math.random() * (19 - 0 + 1)) + 0
  var trailerVideos
  if (trendingToday[index].media_type === "movie") {
    trailerVideos = await getMovieTrailerVideo(trendingToday[index].id)
  } else if (trendingToday[index].media_type === "tv") {
    trailerVideos = await getTVTrailerVideo(trendingToday[index].id)
  }
  return {
    movies: await movies,
    trailerVideos: await trailerVideos,
    tvShows: await tvShows,
    trendingToday: await trendingToday,
  }
}

export const browseRoute = {
  loader,
  element: <Browse />,
}
