import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLoaderData } from "react-router"
import {
  getOnTheAir,
  getPopularTVShows,
  getRatedTVShows,
  getTVAiringToday,
  getTVTrailerVideo,
} from "../api/TVShows"
import {
  addPopularTVShows,
  addRatedTVShows,
  addTVOnTheAir,
  addTVShowsAiringToday,
  addTVTrailer,
} from "../utils/tvSlice"
import MovieAndTVListContainer from "../components/MovieAndTVListContainer"
import MovieOrTVList from "../components/MovieOrTVList"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import TrailerContainer from "../components/TrailerContainer"

const TVShows = () => {
  const dispatch = useDispatch()
  const {
    tvShowsAiringToday,
    popularTVShows,
    ratedTVShows,
    onTheAir,
    trailerVideos,
  } = useLoaderData()
  console.log(onTheAir)
  useEffect(() => {
    dispatch(addTVOnTheAir(onTheAir))
    dispatch(addPopularTVShows(popularTVShows))
    dispatch(addTVShowsAiringToday(tvShowsAiringToday))
    dispatch(addRatedTVShows(ratedTVShows))
    const id = trailerVideos.id
    const trailerVid = trailerVideos.results.filter(
      (video) => video.type == "Trailer"
    )
    const trailer =
      trailerVid.length > 0 ? trailerVid[0] : trailerVideos.results[0]
    dispatch(addTVTrailer({ trailer, id }))
  }, [
    onTheAir,
    popularTVShows,
    tvShowsAiringToday,
    ratedTVShows,
    trailerVideos,
  ])

  const onTheAirData = useSelector((state) => state.tv.tvOnTheAir)
  console.log(onTheAirData)
  const popularTVShowsData = useSelector((state) => state.tv.popularTVShows)
  const tvShowsAiringTodayData = useSelector(
    (state) => state.tv.tvShowsAiringToday
  )
  const ratedTVShowsData = useSelector((state) => state.tv.ratedTVShows)
  const { trailer, id } = useSelector((state) => state.tv.tvTrailer)

  return (
    <div className="text-white">
      <Header>
        <NavBar />
        <button className="mr-6">Sign Out</button>
      </Header>
      {id &&
        ratedTVShowsData.map((item) => {
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
            mediaType={"tv"}
            title={"Popular TV Shows"}
            listData={popularTVShowsData}
          />
        </div>
        <MovieOrTVList
          mediaType={"tv"}
          title={"TV Shows on the Air"}
          listData={onTheAirData}
        />
        <MovieOrTVList
          mediaType={"tv"}
          title={"Rated TV Shows"}
          listData={ratedTVShowsData}
        />
        <MovieOrTVList
          mediaType={"tv"}
          title={"TV Shows Airing Today"}
          listData={tvShowsAiringTodayData}
        />
      </MovieAndTVListContainer>
    </div>
  )
}

const loader = async ({ request: { signal } }) => {
  const tvShowsAiringToday = await getTVAiringToday({ signal })

  const popularTVShows = await getPopularTVShows({ signal })

  const ratedTVShows = await getRatedTVShows({ signal })
  const onTheAir = await getOnTheAir({ signal })
  const index = Math.floor(Math.random() * (19 - 0 + 1)) + 0
  const trailerVideos = await getTVTrailerVideo(ratedTVShows[index].id)
  return {
    tvShowsAiringToday,
    popularTVShows,
    ratedTVShows,
    onTheAir,
    trailerVideos,
  }
}

export const tvShowsRoute = {
  loader,
  element: <TVShows />,
}
