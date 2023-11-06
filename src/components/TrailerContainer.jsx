import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import "../App.css"
import { useChangeOnScroll } from "../hooks/useChangeOnScroll"

const TrailerContainer = () => {
  const { trailer, id } = useSelector((state) => state.movie.movieTrailer)
  const moviesPlayingNow = useSelector((state) => state.movie.moviesPlayingNow)
  const isScrolling = useChangeOnScroll(50)
  return (
    <div className="relative -mt-[200px] mb-5 w-full">
      <div className="absolute bottom-[350px]">
        {moviesPlayingNow.map((movie) => {
          if (movie.id === id) {
            return (
              <div
                className={`p-2 w-[400px] pl-10 bg-gradient-to-r from-black ${
                  isScrolling ? "hidden" : "block"
                }`}
                key={movie.id}
              >
                <p className="text-2xl font-bold op text-white">
                  {movie.original_title}
                </p>
                <p>{movie.overview}</p>
              </div>
            )
          }
        })}
      </div>
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&showinfo=0&rel=0&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default TrailerContainer
