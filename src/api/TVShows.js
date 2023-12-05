import { baseAPI } from "./baseAPI"

export const getTVAiringToday = async (options) => {
  const data = await baseAPI.get(
    "/discover/tv?with_original_language=hi",
    options
  )
  return data.data.results
}

export const getTVTrailerVideo = async (tvId, options) => {
  const data = await baseAPI.get(`/tv/${tvId}/videos`, options)
  return data.data
}

export const getOnTheAir = async (options) => {
  const data = await baseAPI.get(
    "/discover/tv?with_original_language=en",
    options
  )
  return data.data.results
}

export const getPopularTVShows = async (options) => {
  const data = await baseAPI.get("/tv/popular", options)
  return data.data.results
}

export const getRatedTVShows = async (options) => {
  const data = await baseAPI.get("/tv/top_rated", options)
  return data.data.results
}
