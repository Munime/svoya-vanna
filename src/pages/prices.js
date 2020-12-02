import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import SEO from "../components/seo"

const Prices = () => (
  <Layout>
    <SEO title="Ціни" />
    <div className="grid">
      <div className=" pt-12 text-primary lg:mx-12 lg:text-center">
        <h1 className="font-display text-3xl font-bold leading-12">
          Ми виробляємо вологостійкі меблі для ванних кімнат за індивідуальними
          проектами під замовлення і на її вартість впливають багато чинників:
        </h1>
      </div>
      <div className="lg:mx-12">
        <div className="border border-primary font-display text-sm font-normal mt-8">
          <p className="p-3 tracking-widest text-center">
            Матеріал і розміри корпусу
          </p>
        </div>
        <div className="border border-primary font-display text-sm font-normal mt-8">
          <p className="p-3 tracking-widest text-center">
            Колір, форма і матеріал фасаду
          </p>
        </div>
        <div className="border border-primary font-display text-sm font-normal mt-8">
          <p className="p-3 tracking-widest text-center">
            Кількість і виробник фурнітури
          </p>
        </div>
        <div className="border border-primary font-display text-sm font-normal mt-8 mb-16">
          <p className="p-3 tracking-widest text-center">
            Конструкція і форма раковини
          </p>
        </div>
      </div>

      <div className="font-display text-sm font-normal leading-8 text-center mb-16 lg:mx-12">
        <p>
          Виходячи з цього, тільки виїхавши на об'єкт і ознайомившись з Ваших
          вимог і побажань ми з можемо озвучити вартість виробу.
        </p>
      </div>
      <div className="flex justify-center mt-8 pb-32">
        <button
          onClick={() => navigate("/contact")}
          className="uppercase text-light font-display rounded-sm bg-primary p-2 text-center mx-auto my-0 mt-12 mb-12 hover:bg-light hover:text-primary hover:border-primary"
        >
          <span className="font-bold tracking-widest text-sm p-8 ">
            Звя'затися
          </span>
        </button>
      </div>
    </div>
  </Layout>
)

export default Prices
