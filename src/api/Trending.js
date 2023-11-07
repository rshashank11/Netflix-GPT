import axios from "axios"
import { baseAPI } from "./baseAPI"

export const getTrendingToday = async (options) => {
  const data = await baseAPI.get("trending/all/day?language=en-US", options)
  const trending = data.data.results
  return trending
}
