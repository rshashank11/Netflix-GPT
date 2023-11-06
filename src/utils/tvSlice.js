import { createSlice } from "@reduxjs/toolkit"

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    tvShowsAiringToday: [],
  },
  reducers: {
    addTVShowsAiringToday: (state, action) => {
      state.tvShowsAiringToday = action.payload
    },
  },
})

export default tvSlice.reducer
export const { addTVShowsAiringToday } = tvSlice.actions
