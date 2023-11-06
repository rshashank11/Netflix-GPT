import React from "react"
import { useSelector } from "react-redux"
import "../App.css"
import MovieOrTVList from "./MovieOrTVList"

const MovieAndTVListContainer = () => {
  const moviesPlayingNow = useSelector((state) => state.movie.moviesPlayingNow)
  const tvShowsAiringToday = useSelector((state) => state.tv.tvShowsAiringToday)
  return (
    <div className="relative">
      <div className="relative -mt-52 z-10 bg-gradient-to-t from-black">
        <MovieOrTVList
          title={"Now Playing Movies"}
          listData={moviesPlayingNow}
        />
      </div>
      <MovieOrTVList
        title={"TV Shows Airing Today"}
        listData={tvShowsAiringToday}
      />
    </div>
  )
}

export default MovieAndTVListContainer
