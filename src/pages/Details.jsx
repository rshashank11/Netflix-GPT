import React, { useEffect } from "react"
import { getCredits, getDetails, getRecommended } from "../api/Details"
import { useLoaderData, useParams } from "react-router"
import { getMovieTrailerVideo } from "../api/Movies"
import { useDispatch, useSelector } from "react-redux"
import TrailerContainer from "../components/TrailerContainer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import {
  addCertifications,
  addCredits,
  addDetails,
  addRecommended,
  addTrailer,
} from "../utils/detailsSlice"
import { getTVTrailerVideo } from "../api/TVShows"
import RecommendedCard from "../components/RecommendedCard"
import { Link } from "react-router-dom"

const Details = () => {
  const dispatch = useDispatch()
  const {
    details,
    trailerVideos,
    credits,
    recommended,
    certifications,
    mediaType,
  } = useLoaderData()

  useEffect(() => {
    dispatch(addDetails({ detailsData: details, mediaTypeData: mediaType }))
    dispatch(addCredits(credits))
    dispatch(addRecommended(recommended))
    dispatch(addCertifications(certifications))
    const id = trailerVideos.id && trailerVideos.id

    const trailerVid = trailerVideos.results.filter(
      (video) => video.type == "Trailer"
    )
    const trailer =
      trailerVid.length > 0 ? trailerVid[0] : trailerVideos.results[0]
    dispatch(addTrailer({ trailer, id }))
  }, [details, trailerVideos, credits, mediaType, recommended, certifications])

  const { trailer, id } = useSelector((state) => state.details.trailer)
  const { detailsData, mediaTypeData } = useSelector(
    (state) => state.details.details
  )
  const creditsData = useSelector((state) => state.details.credits)
  const recommendedData = useSelector((state) => state.details.recommended)
  // const certificatesData = useSelector((state) => state.details.certifications)
  return (
    <div className="text-white">
      <Header>
        <NavBar />
        <button className="mr-6">Sign Out</button>
      </Header>
      {id && (
        <TrailerContainer
          details={detailsData}
          trailerDetail={trailer}
          trailerId={id}
        />
      )}
      {mediaTypeData != null && (
        <div className="flex absolute">
          <div className="w-[60%]">
            <ul className="flex gap-2 items-center">
              {/* <li>
                {certificatesData.results.map((certificate) => {
                  if (certificate.iso_3166_1 == "US") {
                    certificate.release_dates.map((cert) => {
                      if (cert.certification != "") {
                        return <h2>{cert.certification}</h2>
                      }
                    })
                  }
                })}
              </li> */}
              <li>{Math.round(detailsData.vote_average * 10, 2)}% Match</li>
              {detailsData.first_air_date ? (
                <li>{detailsData.first_air_date}</li>
              ) : (
                <li>{detailsData.release_date}</li>
              )}
              {detailsData.runtime ? (
                <li>{`${Math.floor(detailsData.runtime / 60)}h ${
                  detailsData.runtime % 60
                }m`}</li>
              ) : (
                <li>{detailsData.number_of_seasons} Seasons</li>
              )}

              <li>
                <ul className="flex gap-2">
                  {detailsData.spoken_languages.map((language) => {
                    return (
                      <li
                        key={crypto.randomUUID()}
                        className="capitalize border border-red p-0.5"
                      >
                        {language.iso_639_1}
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
            <p>{detailsData.overview}</p>
          </div>
          <div className="w-[40%]">
            <ul className="flex items-center gap-1">
              Cast:
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
            <ul className="flex items-center gap-1">
              Genres:
              {detailsData.genres.map((genre, index) => {
                return (
                  <li key={genre.id}>
                    {genre.name}
                    {index !== details.genres.length - 1 && ", "}{" "}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
      <div>
        <h2>More like this</h2>
        <ul className="grid grid-cols-7 gap-2">
          {Array.isArray(recommendedData)
            ? recommendedData.map((recommended) => {
                return (
                  <li className="min-w-[185px]" key={recommended.id}>
                    <Link to={`/${mediaTypeData}/${recommended.id}`}>
                      <RecommendedCard {...recommended} />
                    </Link>
                  </li>
                )
              })
            : null}
        </ul>
      </div>
    </div>
  )
}

const loader = async ({ request: { signal }, params: { mediaType, id } }) => {
  const details = await getDetails(`/${mediaType}/${id}`, { signal })
  var trailerVideos
  if (mediaType == "movie") {
    trailerVideos = await getMovieTrailerVideo(details.id, { signal })
  } else if (mediaType == "tv") {
    trailerVideos = await getTVTrailerVideo(details.id, { signal })
  }
  const credits = await getCredits(`/${mediaType}/${id}/credits`, { signal })
  const recommended = await getRecommended(`/${mediaType}/${id}/similar`)
  // const certifications = await getCertifications(
  //   `/${mediaType}/${id}/release_dates`
  // )
  return {
    details: await details,
    mediaType: await mediaType,
    trailerVideos: await trailerVideos,
    credits: await credits,
    recommended: await recommended.results,
    // certifications: await certifications,
  }
}

export const detailsRoute = {
  loader,
  element: <Details />,
}

export default Details
