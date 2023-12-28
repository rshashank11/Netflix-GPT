import { CircularProgress } from "@mui/material"
import React from "react"

const Loading = () => {
  return (
    <div>
      <CircularProgress size={100} thickness={10} sx={{ color: "red" }} />
    </div>
  )
}

export default Loading
