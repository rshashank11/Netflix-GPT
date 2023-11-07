import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../utils/userSlice"
import movieReducer from "../utils/movieSlice"
import tvReducer from "../utils/tvSlice"
import trendingReducer from "./trendingSlice"
const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    tv: tvReducer,
    trending: trendingReducer,
  },
})

export default store
