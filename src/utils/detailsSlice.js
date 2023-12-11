import { createSlice } from "@reduxjs/toolkit"

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: { detailsData: null, mediaTypeData: null },
    videos: {},
    trailer: {},
    credits: null,
    recommended: null,
    certifications: null,
  },
  reducers: {
    addDetails: (state, action) => {
      state.details = action.payload
    },
    addVideos: (state, action) => {
      state.videos = action.payload
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload
    },
    addCredits: (state, action) => {
      state.credits = action.payload
    },
    addRecommended: (state, action) => {
      state.recommended = action.payload
    },
    addCertifications: (state, action) => {
      state.certifications = action.payload
    },
  },
})

export default detailsSlice.reducer
export const {
  addDetails,
  addVideos,
  addTrailer,
  addCredits,
  addRecommended,
  addCertifications,
} = detailsSlice.actions
