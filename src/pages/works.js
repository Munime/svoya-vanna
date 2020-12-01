import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/gallery"

import SEO from "../components/seo"

const Works = () => (
  <Layout>
    <SEO title="Works" />
    <div className="-m-4 bg-primary ">
      <div className=" grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Gallery
          name={"Тумби"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
          url={"/tumby"}
        />
        <Gallery
          name={"Шафи"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
        />
        <Gallery
          name={"Дзеркала"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
        />
        <Gallery
          name={"Полиці"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
        />
      </div>
      <div className="m-4 flex justify-center">
        <button className="text-primary font-display rounded-sm bg-sky py-2 text-center mx-auto my-0 mt-12 mb-12 hover:bg-secondary hover:text-primary focus:outline-none focus:ring-secondary focus:ring-2 focus:ring-opacity-50">
          <span className="uppercase font-bold tracking-widest text-sm p-8">
            Замовити
          </span>
        </button>
      </div>
    </div>
  </Layout>
)

export default Works
