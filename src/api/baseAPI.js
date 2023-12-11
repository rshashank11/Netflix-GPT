import axios from "axios"
// import OpenAI from "openai"
export const baseURL = "https://api.themoviedb.org/3"
const apiToken = import.meta.env.VITE_BEARER_TOKEN
console.log(apiToken)
// const apiKey = import.meta.env.VITE_OPEN_API_KEY

// export const openai = new OpenAI({
//   apiKey: apiKey,
//   dangerouslyAllowBrowser: true,
// })

export const baseAPI = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDFmZTRkN2FhNWI4NTUwNTg1ZjYzMzFkYzQzZTQzOSIsInN1YiI6IjY1MzNkYTM1MmIyMTA4MDBmZjg0MmFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJeZV1prWYi-gv7diJui2qYqudRIi4eYGkOQbSPMn1E",,
  },
})
