import React, { useState } from "react"

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-secondary border-b-2 border-light mx-4 flex flex-col justify-center ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" font-bold py-2 px-4 flex justify-between  focus:outline-none focus:ring-secondary transform hover: transition duration-500 hover:translate-x-1"
      >
        <span className="uppercase text-light font-display font-medium text-sm tracking-widest p-4 items-center">
          {title}
        </span>
        <div className="items-center p-4">
          {!isOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.64598 4.64604C1.69242 4.59948 1.7476 4.56253 1.80834 4.53733C1.86909 4.51212 1.93421 4.49915 1.99998 4.49915C2.06575 4.49915 2.13087 4.51212 2.19161 4.53733C2.25236 4.56253 2.30753 4.59948 2.35398 4.64604L7.99998 10.293L13.646 4.64604C13.6925 4.59955 13.7477 4.56267 13.8084 4.53752C13.8691 4.51236 13.9342 4.49941 14 4.49941C14.0657 4.49941 14.1308 4.51236 14.1916 4.53752C14.2523 4.56267 14.3075 4.59955 14.354 4.64604C14.4005 4.69253 14.4373 4.74772 14.4625 4.80846C14.4877 4.86919 14.5006 4.9343 14.5006 5.00004C14.5006 5.06578 14.4877 5.13088 14.4625 5.19162C14.4373 5.25236 14.4005 5.30755 14.354 5.35404L8.35398 11.354C8.30753 11.4006 8.25236 11.4375 8.19161 11.4628C8.13087 11.488 8.06575 11.5009 7.99998 11.5009C7.93421 11.5009 7.86909 11.488 7.80834 11.4628C7.7476 11.4375 7.69242 11.4006 7.64598 11.354L1.64598 5.35404C1.59942 5.30759 1.56247 5.25242 1.53727 5.19167C1.51206 5.13093 1.49908 5.06581 1.49908 5.00004C1.49908 4.93427 1.51206 4.86915 1.53727 4.80841C1.56247 4.74766 1.59942 4.69248 1.64598 4.64604Z"
                fill="#F1F3F8"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.64599 4.64604C7.69244 4.59948 7.74761 4.56253 7.80836 4.53733C7.8691 4.51212 7.93422 4.49915 7.99999 4.49915C8.06576 4.49915 8.13088 4.51212 8.19162 4.53733C8.25237 4.56253 8.30754 4.59948 8.35399 4.64604L14.354 10.646C14.4479 10.7399 14.5006 10.8673 14.5006 11C14.5006 11.1328 14.4479 11.2602 14.354 11.354C14.2601 11.4479 14.1328 11.5007 14 11.5007C13.8672 11.5007 13.7399 11.4479 13.646 11.354L7.99999 5.70704L2.35399 11.354C2.2601 11.4479 2.13277 11.5007 1.99999 11.5007C1.86721 11.5007 1.73988 11.4479 1.64599 11.354C1.5521 11.2602 1.49936 11.1328 1.49936 11C1.49936 10.8673 1.5521 10.7399 1.64599 10.646L7.64599 4.64604Z"
                fill="#F1F3F8"
              />
            </svg>
          )}
        </div>
      </button>
      {isOpen && (
        <div className="">
          <p className="px-8 pb-4 font-display text-light text-sm font-light leading-loose tracking-wider">
            {content}
          </p>
        </div>
      )}
    </div>
  )
}

export default Accordion
