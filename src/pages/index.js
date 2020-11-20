import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid">
      <div className="p-4 pt-12 text-primary">
        <h1 className="font-display text-4xl font-bold leading-12">
          Проектування і виготовлення вологостійких меблів для ванних кімнат
        </h1>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div className="p-4 text-primary text-center">
        <p className="font-display font-medium text-sm leading-8">
          Ванна кімната - дуже важливе місце в квартирі. Тут ми розслабляємося
          вечорами після важкого трудового дня або опоряджаємося з ранку. Водні
          процедури повинні приносити емоційне і естетичне задоволення.
          Домогтися цього легко за допомогою правильного інтер'єру у ванній
          кімнаті.
        </p>
      </div>
      <div className="text-light font-display bg-primary p-2 text-center mx-auto my-0 mt-8">
        <button className="">
          <span className="font-bold tracking-widest text-sm p-1">
            ДО ГАЛЕРЕЇ РОБІТ
          </span>
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
