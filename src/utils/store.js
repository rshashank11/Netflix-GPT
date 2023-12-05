import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../utils/userSlice"
import movieReducer from "../utils/movieSlice"
import tvReducer from "../utils/tvSlice"
import trendingReducer from "./trendingSlice"
import detailsReducer from "./detailsSlice"
const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    tv: tvReducer,
    trending: trendingReducer,
    details: detailsReducer,
  },
})

export default store
