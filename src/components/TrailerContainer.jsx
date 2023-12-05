import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "../App.css"
import { useChangeOnScroll } from "../hooks/useChangeOnScroll"
import YouTube from "react-youtube"

const TrailerContainer = ({ details, trailerDetail, trailerId }) => {
  const [player, setPlayer] = useState(null)

  const isScrolling = useChangeOnScroll(50)
  function onReady(event) {
    setPlayer(event.target)
  }

  function onPlayHandler() {
    player.playVideo()
  }

  function onPauseHandler() {
    player.pauseVideo()
  }

  return (
    <div className="relative -mt-[200px] mb-5 w-full">
      <div className="absolute bottom-[350px]">
        <div
          key={trailerId}
          className={`p-2 pb-3 pt-3 w-[400px] pl-10 bg-gradient-to-r from-black ${
            isScrolling ? "hidden" : "block"
          }`}
        >
          <p className="text-2xl font-bold op text-white">
            {details.title ? details.title : details.name}
          </p>
          <p className="h-[auto] text-white max-h-[144px] overflow-hidden leading-[20px]">
            {details.overview}
          </p>
        </div>
      </div>

      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${trailerDetail?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerDetail?.key}&showinfo=0&rel=0&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default TrailerContainer
