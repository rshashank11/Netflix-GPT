import { baseAPI } from "./baseAPI"

export const getMoviesPlayingNow = async (options) => {
  const data = await baseAPI.get("/movie/now_playing", options)
  const movies = data.data.results
  return movies
}

export const getMovieTrailerVideo = async (movieId) => {
  const data = await baseAPI.get(`/movie/${movieId}/videos`)
  return data
}
