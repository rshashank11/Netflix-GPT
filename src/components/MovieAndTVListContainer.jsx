import React from "react"
import { useSelector } from "react-redux"
import "../App.css"
import MovieOrTVList from "./MovieOrTVList"

const MovieAndTVListContainer = () => {
  const moviesPlayingNow = useSelector((state) => state.movie.moviesPlayingNow)
  const tvShowsAiringToday = useSelector((state) => state.tv.tvShowsAiringToday)
  const trendingToday = useSelector((state) => state.trending.trendingToday)
  return (
    <div className="relative">
      <div className="relative -mt-52 z-10 bg-gradient-to-t from-black">
        <MovieOrTVList title={"Trending Today"} listData={trendingToday} />
      </div>
      <MovieOrTVList title={"Now Playing Movies"} listData={moviesPlayingNow} />
      <MovieOrTVList
        title={"TV Shows Airing Today"}
        listData={tvShowsAiringToday}
      />
    </div>
  )
}

export default MovieAndTVListContainer
