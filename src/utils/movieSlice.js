import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesPlayingNow: [],
    movies: [],
  },
  reducers: {
    addMoviesPlayingNow: (state, action) => {
      state.moviesPlayingNow = action.payload
    },
    addMovies: (state, action) => {
      state.movies = action.payload
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload
    },
  },
})

export default movieSlice.reducer
export const { addMoviesPlayingNow, addMovies, addMovieTrailer } =
  movieSlice.actions
