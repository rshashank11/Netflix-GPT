import { baseAPI } from "./baseAPI"

export const getDetails = async (url, options) => {
  const data = await baseAPI.get(url, options)
  const details = data.data
  return details
}

export const getCredits = async (url, options) => {
  const data = await baseAPI.get(url, options)
  const credits = data.data
  return credits
}

export const getRecommended = async (url, options) => {
  const data = await baseAPI.get(url, options)
  const recommended = data.data
  return recommended
}

export const getCertifications = async (url, options) => {
  const data = await baseAPI.get(url, options)
  const certifications = data.data
  return certifications
}

export const getVideos = async (url, options) => {
  const data = await baseAPI.get(url, options)
  return data.data
}
