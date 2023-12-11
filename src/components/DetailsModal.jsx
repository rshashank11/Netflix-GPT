import React, { useState } from "react"
import ReactModal from "react-modal"
import "../App.css"
import {
  getCredits,
  getDetails,
  getRecommended,
  getVideos,
} from "../api/Details"
import {
  addCredits,
  addDetails,
  addRecommended,
  addVideos,
} from "../utils/detailsSlice"
import { useDispatch, useSelector } from "react-redux"
import "../../node_modules/swiper/swiper.min.css"
import "../../node_modules/swiper/swiper-bundle.min.css"
import { Navigation, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "../App.css"
import "../index.css"
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone"
import RecommendedCard from "./RecommendedCard"

export const ModalReact = ({
  title,
  poster_path,
  backdrop_path,
  name,
  id,
  overview,
  mediaType,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  function openModal() {
    setIsOpen(true)
  }

  async function fetchData() {
    const controller = new AbortController()
    const signal = controller.signal
    const details = await getDetails(`/${mediaType}/${id}`, { signal })
    const credits = await getCredits(`/${mediaType}/${id}/credits`, { signal })
    const videos = await getVideos(`/${mediaType}/${id}/videos`, { signal })
    var recommended = await getRecommended(
      `/${mediaType}/${id}/recommendations`
    )
    if (recommended.results.length == 0) {
      recommended = await getRecommended(`/${mediaType}/${id}/similar`)
    }

    dispatch(addDetails({ detailsData: details, mediaTypeData: mediaType }))
    dispatch(addCredits(credits))
    dispatch(addVideos(videos))
    dispatch(addRecommended(recommended.results))
  }

  function closeModal() {
    setIsOpen(false)
  }

  const { detailsData, mediaTypeData } = useSelector(
    (state) => state.details.details
  )
  const videosData = useSelector((state) => state.details.videos)

  const creditsData = useSelector((state) => state.details.credits)
  const directingCrew =
    creditsData &&
    creditsData.crew.filter(
      (person) => person.known_for_department === "Directing"
    )
  const writingCrew =
    creditsData &&
    creditsData.crew.filter(
      (person) => person.known_for_department === "Writing"
    )
  const recommendedData = useSelector((state) => state.details.recommended)
  return (
    <div>
      <img
        onClick={openModal}
        className="min-w-[185px] h-[270px]"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="poster"
      />
      <ReactModal
        className="modal"
        overlayClassName="overlay"
        parentSelector={() => document.querySelector("#root")}
        isOpen={modalIsOpen}
        onAfterOpen={fetchData}
        onRequestClose={closeModal}
        // style={customStyles}
        ariaHideApp={false}
        preventScroll={true}
        contentLabel="Example Modal"
      >
        <div className="relative">
          <img
            className="rounded-[20px] opacity-30"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="backdrop"
          />
        </div>
        <div className="w-full top-4 absolute">
          <div className="relative">
            <div className="w-full absolute flex flex-row justify-between">
              <div>
                <div className={`p-2 pb-3 pt-3 pl-10 `}>
                  <p className="text-2xl font-bold op text-white">
                    {title ? title : name}
                  </p>
                </div>
              </div>
              <button onClick={closeModal} className="text-white  pr-10">
                <CancelTwoToneIcon style={{ fontSize: "2rem" }} />
              </button>
            </div>
          </div>
          <div className="absolute min-w-full top-20 flex flex-col gap-5 px-12 text-white">
            {detailsData && (
              <div className="">
                <ul className="flex gap-2 items-center">
                  <li className="text-[#46d369] font-medium">
                    {Math.round(
                      detailsData.vote_average && detailsData.vote_average * 10,
                      2
                    )}
                    % Match
                  </li>
                  {detailsData.first_air_date ? (
                    <li className="text-[#bcbcbc]">
                      {detailsData.first_air_date}
                    </li>
                  ) : (
                    <li className="text-[#bcbcbc]">
                      {detailsData.release_date}
                    </li>
                  )}
                  {detailsData.runtime ? (
                    <li className="text-[#bcbcbc]">{`${Math.floor(
                      detailsData.runtime / 60
                    )}h ${detailsData.runtime % 60}m`}</li>
                  ) : (
                    <li className="text-[#bcbcbc]">
                      {detailsData.number_of_seasons} Seasons
                    </li>
                  )}

                  <li>
                    <ul className="flex gap-2">
                      {detailsData.spoken_languages.map((language) => {
                        return (
                          <li
                            key={crypto.randomUUID()}
                            className="capitalize border border-red py-0.5 px-1 text-xs"
                          >
                            {language.iso_639_1}
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                </ul>
                {detailsData && (
                  <p className="mt-1 text-lg font-normal tracking-wide">
                    {detailsData.overview}
                  </p>
                )}
              </div>
            )}

            {creditsData && (
              <div className=" font-medium">
                <ul className="flex items-center gap-2  flex-wrap">
                  <span className="text-[#777] italic font-normal">Cast:</span>
                  {creditsData.cast.slice(0, 3).map((cast, index) => {
                    return (
                      <li key={cast.id}>
                        {cast.name}
                        {index !== creditsData.cast.length - 1 && ", "}{" "}
                      </li>
                    )
                  })}
                  <span className="italic">more</span>
                </ul>
                <ul className="flex items-center gap-2">
                  <span className="text-[#777] italic font-normal">
                    Genres:
                  </span>
                  {detailsData.genres.map((genre, index) => {
                    return (
                      <li key={genre.id}>
                        {genre.name}
                        {index !== genre.length - 1 && ", "}{" "}
                      </li>
                    )
                  })}
                </ul>
                <ul className="flex flex-col gap-1/2">
                  <li>
                    <span className="text-[#777] italic font-normal">
                      Director:
                    </span>{" "}
                    {directingCrew[0]?.name}
                  </li>
                  <li>
                    <span className="text-[#777] italic font-normal">
                      Writer:
                    </span>{" "}
                    {writingCrew[0]?.name}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-1 bg-gradient-to-t from-[#141414] mx-1">
          <ul className="flex overflow-x-auto flex-row">
            {videosData && videosData.results?.length > 1 ? (
              <Swiper
                effect="slide"
                loop={true}
                modules={[Navigation, A11y]}
                slidesPerView={2}
                spaceBetween={40}
                mousewheel={true}
                slidesPerGroup={1}
                speed={500}
                navigation
              >
                {videosData &&
                  Array.isArray(videosData.results) &&
                  videosData.results.map((video, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <li>
                          <iframe
                            className="w-[400px] aspect-video"
                            src={`https://www.youtube.com/embed/${video?.key}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        </li>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
            ) : (
              <Swiper
                centerInsufficientSlides={false}
                loop={true}
                modules={[Navigation, A11y]}
                slidesPerView={1}
                spaceBetween={40}
                mousewheel={true}
                slidesPerGroup={1}
                speed={500}
                navigation
              >
                {videosData &&
                  Array.isArray(videosData.results) &&
                  videosData.results.map((video, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <li>
                          <iframe
                            className="w-[400px] aspect-video"
                            src={`https://www.youtube.com/embed/${video?.key}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        </li>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
            )}
          </ul>
        </div>
        <div
          className="mb-[100px] flex 
        flex-col text-white"
        >
          <h2 className="text-xl self-start font-bold mt-10 mb-2 text-[#bcbcbc] px-6">
            More like this
          </h2>
          <ul className="flex justify-evenly pl-4 flex-wrap">
            {Array.isArray(recommendedData)
              ? recommendedData.map((recommended) => {
                  return (
                    <li className="min-w-[200px]" key={recommended.id}>
                      <RecommendedCard {...recommended} />
                    </li>
                  )
                })
              : null}
          </ul>
        </div>
      </ReactModal>
    </div>
  )
}

export default ModalReact
