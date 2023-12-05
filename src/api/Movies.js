import { baseAPI } from "./baseAPI"

export const getMoviesPlayingNow = async (options) => {
  const data = await baseAPI.get("/movie/now_playing", options)
  const movies = data.data.results
  return movies
}

export const getMovieTrailerVideo = async (movieId) => {
  const data = await baseAPI.get(`/movie/${movieId}/videos`)
  return data.data
}

export const getPopularMovies = async (options) => {
  const data = await baseAPI.get(`/movie/popular`, options)
  return data.data
}

export const getTopRatedMovies = async (options) => {
  const data = await baseAPI.get(`/movie/top_rated`, options)

  return data.data
}

export const getUpcomingMovies = async (options) => {
  const data = await baseAPI.get(`/movie/upcoming`, options)
  return data.data
}
