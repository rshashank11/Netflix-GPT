import axios from "axios"
export const baseURL = "https://api.themoviedb.org/3"
export const baseAPI = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.BEARER_TOKEN,
  },
})
