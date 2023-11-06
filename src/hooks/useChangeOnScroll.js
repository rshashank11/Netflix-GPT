import { useEffect, useState } from "react"

export const useChangeOnScroll = (scrollLength) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > scrollLength) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [window.scrollY])

  return isScrolling
}
