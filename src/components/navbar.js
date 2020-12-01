import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/sv-logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex w-full h-full justify-between bg-light">
      <div className="p-4">
        <Link to="/">
          <img src={logo} alt="svoya-vanna-logo" />
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-0 top-4 flex items-center mr-4 z-50 md:hidden"
      >
        {!isOpen ? (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="6"
              y1="33"
              x2="42"
              y2="33"
              stroke="#393B44"
              strokeWidth="2"
            />
            <line
              x1="6"
              y1="23"
              x2="42"
              y2="23"
              stroke="#393B44"
              strokeWidth="2"
            />
            <line
              x1="6"
              y1="13"
              x2="42"
              y2="13"
              stroke="#393B44"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="10.7071"
              y1="10.2929"
              x2="36.1629"
              y2="35.7487"
              stroke="#F1F3F8"
              strokeWidth="2"
            />
            <line
              x1="10.2929"
              y1="35.7487"
              x2="35.7487"
              y2="10.2929"
              stroke="#F1F3F8"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
      <div className={`${!isOpen ? "hidden" : "block"} md:flex z-10`}>
        <div className="flex flex-col flex-nowrap justify-center items-center bg-secondary absolute top-0 right-0 h-screen w-full md:flex-row md:h-16 md:w-auto md:bg-light ">
          <div className="flex flex-col items-center justify-center font-display font-semibold text-light text-2xl uppercase tracking-widest md:flex-row md:text-primary md:text-sm md:mr-2 md:font-normal lg:font-semibold">
            <Link
              className=" p-5 hover:bg-sky hover:text-primary md:pr-2 lg:pr-4 "
              to="/works"
            >
              Галерея
            </Link>
            <Link
              className=" p-5 hover:bg-sky hover:text-primary md:pr-2 lg:pr-4 "
              to="/services"
            >
              Послуги
            </Link>
            <Link
              className=" p-5 hover:bg-sky hover:text-primary md:pr-2 lg:pr-4 "
              to="/prices"
            >
              Ціни
            </Link>
            <Link
              className=" p-5 hover:bg-sky hover:text-primary md:pr-2 lg:pr-4 "
              to="/about"
            >
              Про Нас
            </Link>
            <Link
              className="p-5 hover:bg-sky hover:text-primary md:pr-2 lg:pr-4 "
              to="/contact"
            >
              Контакти
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
