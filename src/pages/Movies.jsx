import React, { useEffect } from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import {
  getMovieTrailerVideo,
  getMoviesPlayingNow,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api/Movies"
import { useDispatch, useSelector } from "react-redux"
import { useLoaderData, useNavigation } from "react-router"
import {
  addMovieTrailer,
  addMoviesPlayingNow,
  addPopularMovies,
  addRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice"
import TrailerContainer from "../components/TrailerContainer"
import MovieAndTVListContainer from "../components/MovieAndTVListContainer"
import MovieOrTVList from "../components/MovieOrTVList"

const Movies = () => {
  const { state } = useNavigation()
  const dispatch = useDispatch()
  const {
    moviesPlayingNow,
    popularMovies,
    ratedMovies,
    upcomingMovies,
    trailerVideos,
  } = useLoaderData()
  useEffect(() => {
    dispatch(addMoviesPlayingNow(moviesPlayingNow))
    dispatch(addPopularMovies(popularMovies.results))
    dispatch(addRatedMovies(ratedMovies))
    dispatch(addUpcomingMovies(upcomingMovies))
    dispatch(addMovieTrailer(trailerVideos))
    const id = trailerVideos.id
    const trailerVid = trailerVideos.results.filter(
      (video) => video.type == "Trailer"
    )
    const trailer =
      trailerVid.length > 0 ? trailerVid[0] : trailerVideos.results[0]
    dispatch(addMovieTrailer({ trailer, id }))
  }, [
    moviesPlayingNow,
    popularMovies,
    ratedMovies,
    upcomingMovies,
    trailerVideos,
  ])
  const moviesPlayingNowData = useSelector(
    (state) => state.movie.moviesPlayingNow
  )
  const popularMoviesData = useSelector((state) => state.movie.popularMovies)
  const ratedMoviesData = useSelector((state) => state.movie.ratedMovies)
  const upcomingMoviesData = useSelector((state) => state.movie.upcomingMovies)
  const { id, trailer } = useSelector((state) => state.movie.movieTrailer)

  return (
    <>
      <div className="text-white">
        {id &&
          popularMoviesData.map((item) => {
            if (item.id === id) {
              return (
                <TrailerContainer
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
              mediaType={"movie"}
              title={"Popular Movies"}
              listData={popularMoviesData}
            />
          </div>
          <MovieOrTVList
            mediaType={"movie"}
            title={"Now Playing Movies"}
            listData={moviesPlayingNowData}
          />
          <MovieOrTVList
            mediaType={"movie"}
            title={"Rated Movies"}
            listData={ratedMoviesData.results}
          />
          <MovieOrTVList
            mediaType={"movie"}
            title={"Upcoming Movies"}
            listData={upcomingMoviesData.results}
          />
        </MovieAndTVListContainer>
      </div>
    </>
  )
}

const loader = async ({ request: { signal } }) => {
  const moviesPlayingNow = await getMoviesPlayingNow({ signal })

  const popularMovies = await getPopularMovies({ signal })

  const ratedMovies = await getTopRatedMovies({ signal })
  const upcomingMovies = await getUpcomingMovies({ signal })
  const index = Math.floor(Math.random() * (19 - 0 + 1)) + 0
  const trailerVideos = await getMovieTrailerVideo(
    popularMovies.results[index].id
  )
  return {
    moviesPlayingNow,
    popularMovies,
    ratedMovies,
    upcomingMovies,
    trailerVideos,
  }
}

export const moviesRoute = {
  loader,
  element: <Movies />,
}
