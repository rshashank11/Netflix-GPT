import React from "react"

const RecommendedCard = ({ title, poster_path }) => {
  return (
    <div>
      {poster_path ? (
        <img
          className="w-[185px] h-[270px]"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        />
      ) : (
        <img
          className="w-[185px] h-[270px]"
          src={
            "https://www.wtrscramp.com/wp-content/uploads/2016/10/400x400-image.jpg"
          }
        />
      )}

      <p className="text-[#bcbcbc] text-sm font-normal mb-3 mt-1 w-[185px]">
        {title}
      </p>
    </div>
  )
}

export default RecommendedCard
