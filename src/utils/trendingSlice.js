import { createSlice } from "@reduxjs/toolkit"

const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    trendingToday: null,
    trendingTrailer: null,
  },
  reducers: {
    addTrendingToday: (state, action) => {
      state.trendingToday = action.payload
    },
    addTrendingTrailer: (state, action) => {
      state.trendingTrailer = action.payload
    },
  },
})

export default trendingSlice.reducer
export const { addTrendingToday, addTrendingTrailer } = trendingSlice.actions
