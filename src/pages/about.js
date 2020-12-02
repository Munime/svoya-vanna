import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Про нас" />
    <div className="grid">
      <div className=" pt-12 text-primary lg:m-12 lg:text-center">
        <h1 className="font-display text-2xl font-bold leading-12">
          Ми спроектуємо і виготовимо за Вашим індивідуальним замовленням
          ексклюзивні вологостійкі меблі для ванної кімнати, які будуть
          відповідати всім Вашим вимогам і будуть радувати Вас довгі роки!
          <br />
          Ми допоможемо Вам придумати СВОЇ меблі! Виготовимо, доставимо і
          встановимо!
        </h1>
      </div>
    </div>
  </Layout>
)

export default About
