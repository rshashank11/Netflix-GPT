import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "../../node_modules/swiper/swiper.min.css"
import "../../node_modules/swiper/swiper-bundle.min.css"
import { Navigation, A11y } from "swiper/modules"
import "../App.css"
import "../index.css"

const MovieOrTVList = ({ mediaType, title, listData }) => {
  return (
    <div>
      <h2 className="pl-7 text-xl font-bold leading-10 text-netflixRed tracking-tighter">
        {title}
      </h2>
      <ul className="pl-3 min-w-full  mb-10">
        <Swiper
          effect="slide"
          color=""
          loop={true}
          modules={[Navigation, A11y]}
          slidesPerView={9}
          spaceBetween={90}
          mousewheel={true}
          slidesPerGroup={4}
          speed={500}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Array.isArray(listData)
            ? listData.map((item) => {
                return (
                  <SwiperSlide>
                    <li className="min-w-[185px] " key={item.id}>
                      <Link
                        to={`/${mediaType ? mediaType : item.media_type}/${
                          item.id
                        }`}
                      >
                        <img
                          className="min-w-[185px] h-[270px]"
                          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        />
                      </Link>
                    </li>
                  </SwiperSlide>
                )
              })
            : null}
        </Swiper>
      </ul>
    </div>
  )
}

export default MovieOrTVList
