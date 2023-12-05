import { createSlice } from "@reduxjs/toolkit"

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    tvShowsAiringToday: [],
    tvTrailer: {},
    tvOnTheAir: [],
    popularTVShows: [],
    ratedTVShows: [],
  },
  reducers: {
    addTVShowsAiringToday: (state, action) => {
      state.tvShowsAiringToday = action.payload
    },
    addTVTrailer: (state, action) => {
      state.tvTrailer = action.payload
    },
    addTVOnTheAir: (state, action) => {
      state.tvOnTheAir = action.payload
    },
    addPopularTVShows: (state, action) => {
      state.popularTVShows = action.payload
    },
    addRatedTVShows: (state, action) => {
      state.ratedTVShows = action.payload
    },
  },
})

export default tvSlice.reducer
export const {
  addTVShowsAiringToday,
  addTVTrailer,
  addTVOnTheAir,
  addPopularTVShows,
  addRatedTVShows,
} = tvSlice.actions
