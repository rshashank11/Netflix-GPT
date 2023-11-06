import { baseAPI } from "./baseAPI"

export const getTVAiringToday = async (options) => {
  const data = await baseAPI.get(
    "/tv/airing_today?with_original_language=en",
    options
  )
  const tvShows = data.data.results
  return tvShows
}

// export const getTrailerVideo = async (movieId) => {
//   const data = await baseAPI.get(`/movie/${movieId}/videos`)
//   return data
// }