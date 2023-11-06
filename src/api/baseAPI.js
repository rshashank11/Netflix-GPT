import axios from "axios"
export const baseURL = "https://api.themoviedb.org/3"
export const baseAPI = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDFmZTRkN2FhNWI4NTUwNTg1ZjYzMzFkYzQzZTQzOSIsInN1YiI6IjY1MzNkYTM1MmIyMTA4MDBmZjg0MmFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJeZV1prWYi-gv7diJui2qYqudRIi4eYGkOQbSPMn1E",
  },
})
