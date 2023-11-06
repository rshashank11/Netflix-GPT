import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../utils/userSlice"
import movieReducer from "../utils/movieSlice"
import tvReducer from "../utils/tvSlice"
const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    tv: tvReducer,
  },
})

export default store
