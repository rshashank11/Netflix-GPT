import { baseAPI } from "./baseAPI"

export const getTVAiringToday = async (options) => {
  const data = await baseAPI.get(
    "/tv/airing_today?with_original_language=en",
    options
  )
  const tvShows = data.data.results
  return tvShows
}

export const getTVTrailerVideo = async (tvId) => {
  const data = await baseAPI.get(`/tv/${tvId}/videos`)
  return data
}
