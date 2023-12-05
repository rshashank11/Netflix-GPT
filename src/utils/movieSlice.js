import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieTrailer: {},
    moviesPlayingNow: [],
    popularMovies: [],
    ratedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    addMoviesPlayingNow: (state, action) => {
      state.moviesPlayingNow = action.payload
    },

    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addRatedMovies: (state, action) => {
      state.ratedMovies = action.payload
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
  },
})

export default movieSlice.reducer
export const {
  addMoviesPlayingNow,
  addMovies,
  addMovieTrailer,
  addPopularMovies,
  addRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions
