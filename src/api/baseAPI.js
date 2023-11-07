import axios from "axios"
export const baseURL = "https://api.themoviedb.org/3"
const apiToken = import.meta.env.VITE_BEARER_TOKEN

export const baseAPI = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: apiToken,
  },
})
