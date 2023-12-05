import axios from "axios"
import OpenAI from "openai"
export const baseURL = "https://api.themoviedb.org/3"
const apiToken = import.meta.env.VITE_BEARER_TOKEN
const apiKey = import.meta.env.VITE_OPEN_API_KEY

export const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
})

export const baseAPI = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: apiToken,
  },
})
