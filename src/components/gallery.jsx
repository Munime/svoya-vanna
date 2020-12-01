import React from "react"
import { navigate } from "gatsby"

const Gallery = ({ name, image, url }) => {
  return (
    <div className="m-4 mt-12 overflow-hidden">
      <div className="">
        <button
          onClick={() => navigate(`${url}`)}
          className="overflow-hidden max-h-72 mb-4 "
        >
          <img
            className=" w-full h-full  object-scale-down transform hover: transition duration-500 hover:scale-105 focus:outline-none focus:shadow-outline"
            src={image}
            alt="gallery_01"
          />
        </button>
      </div>

      <button
        onClick={() => navigate(`${url}`)}
        className="flex border-2 rounded-sm border-secondary px-4 py-4 justify-center w-full text-sky hover:bg-sky hover:text-primary focus:outline-none focus:ring-secondary focus:ring-2 focus:ring-opacity-50"
      >
        <span className="font-display uppercase tracking-widest">{name}</span>
      </button>
    </div>
  )
}

export default Gallery
