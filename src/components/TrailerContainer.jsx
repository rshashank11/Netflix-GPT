import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import "../App.css"
import { useChangeOnScroll } from "../hooks/useChangeOnScroll"

const TrailerContainer = () => {
  const { trailer, id } = useSelector((state) => state.trending.trendingTrailer)

  const trendingToday = useSelector((state) => state.trending.trendingToday)

  const isScrolling = useChangeOnScroll(50)
  return (
    <div className="relative -mt-[200px] mb-5 w-full">
      <div className="absolute bottom-[350px]">
        {Array.isArray(trendingToday)
          ? trendingToday.map((item) => {
              if (item.id === id) {
                return (
                  <div
                    key={item.id}
                    className={`p-2 w-[400px] pl-10 bg-gradient-to-r from-black ${
                      isScrolling ? "hidden" : "block"
                    }`}
                  >
                    <p className="text-2xl font-bold op text-white">
                      {item.title ? item.title : item.name}
                    </p>
                    <p className="h-[120px] leading-[20px] overflow-hidden">
                      {item.overview}
                    </p>
                  </div>
                )
              }
            })
          : null}
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
