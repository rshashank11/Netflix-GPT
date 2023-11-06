import React from "react"

const MovieOrTVList = ({ title, listData }) => {
  return (
    <div>
      <h2 className="pl-7 text-xl font-bold leading-10 text-netflixRed tracking-tighter">
        {title}
      </h2>
      <ul className=" pl-6 min-w-full flex video-list-container overflow-x-scroll mb-10">
        {Array.isArray(listData)
          ? listData.map((item, index) => {
              if (!!index) {
                return (
                  <li className="mx-[5px]" key={item.id}>
                    <img
                      className="min-w-[185px]"
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    />
                  </li>
                )
              }
            })
          : null}
      </ul>
    </div>
  )
}

export default MovieOrTVList
