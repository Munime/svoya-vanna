import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Контакти" />
    <div className="grid bg-primary -m-4">
      <div className="m-4 mt-8 font-display font-light text-light text-md leading-8">
        <p>
          Ми готові зустрітися з Вами у зручний для Вас час і в зручному для Вас
          місці. Ми допоможемо Вам придумати СВОЮ меблі - виготовимо, доставимо
          і встановимо!
        </p>
      </div>
      <div className="m-4 mt-8 font-display font-light text-light text-md leading-8">
        <p>
          Якщо Ви є архітектором або дизайнером і хочете втілити свої ідеї, але
          не можете знайти відповідного пропозиції в салонах і магазинах
          України, ми допоможемо Вам реалізувати їх.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-display text-2xl font-bold text-sky tracking-widest mt-8 mb-4">
          зателефонувати
        </h2>
      </div>
      <div className="flex overflow-hidden ">
        <button className="flex m-4 justify-between items-center px-4 border border-light text-light py-2 w-screen font-display tracking-widest">
          <svg
            className="hover:fill-primary"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2475 16.11L16.9275 14.43C17.1538 14.2065 17.44 14.0536 17.7516 13.9897C18.0631 13.9258 18.3865 13.9537 18.6825 14.07L20.73 14.8875C21.0291 15.0089 21.2856 15.2161 21.4671 15.4831C21.6486 15.75 21.747 16.0647 21.75 16.3875V20.1375C21.7482 20.3571 21.7021 20.574 21.6143 20.7753C21.5265 20.9766 21.3989 21.158 21.2391 21.3087C21.0793 21.4593 20.8907 21.5761 20.6847 21.6519C20.4786 21.7278 20.2593 21.7611 20.04 21.75C5.69248 20.8575 2.79748 8.7075 2.24998 4.0575C2.22456 3.82915 2.24778 3.59801 2.31811 3.37928C2.38844 3.16055 2.50429 2.95919 2.65803 2.78845C2.81177 2.61771 2.99992 2.48145 3.2101 2.38865C3.42028 2.29584 3.64772 2.24859 3.87748 2.25H7.49998C7.82324 2.25096 8.13881 2.3486 8.40612 2.53037C8.67344 2.71214 8.88025 2.96973 8.99998 3.27L9.81748 5.3175C9.93767 5.6123 9.96833 5.93598 9.90564 6.24811C9.84295 6.56024 9.68968 6.84697 9.46498 7.0725L7.78498 8.7525C7.78498 8.7525 8.75248 15.3 15.2475 16.11Z"
              fill="#F1F3F8"
            />
          </svg>
          <span>(096) 260-59-56</span>
        </button>
      </div>
      <div className="flex overflow-hidden mb-12">
        <button className="flex m-4 justify-between items-center px-4 border border-light text-light py-2 w-screen font-display tracking-widest">
          <svg
            className="hover:fill-primary"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2475 16.11L16.9275 14.43C17.1538 14.2065 17.44 14.0536 17.7516 13.9897C18.0631 13.9258 18.3865 13.9537 18.6825 14.07L20.73 14.8875C21.0291 15.0089 21.2856 15.2161 21.4671 15.4831C21.6486 15.75 21.747 16.0647 21.75 16.3875V20.1375C21.7482 20.3571 21.7021 20.574 21.6143 20.7753C21.5265 20.9766 21.3989 21.158 21.2391 21.3087C21.0793 21.4593 20.8907 21.5761 20.6847 21.6519C20.4786 21.7278 20.2593 21.7611 20.04 21.75C5.69248 20.8575 2.79748 8.7075 2.24998 4.0575C2.22456 3.82915 2.24778 3.59801 2.31811 3.37928C2.38844 3.16055 2.50429 2.95919 2.65803 2.78845C2.81177 2.61771 2.99992 2.48145 3.2101 2.38865C3.42028 2.29584 3.64772 2.24859 3.87748 2.25H7.49998C7.82324 2.25096 8.13881 2.3486 8.40612 2.53037C8.67344 2.71214 8.88025 2.96973 8.99998 3.27L9.81748 5.3175C9.93767 5.6123 9.96833 5.93598 9.90564 6.24811C9.84295 6.56024 9.68968 6.84697 9.46498 7.0725L7.78498 8.7525C7.78498 8.7525 8.75248 15.3 15.2475 16.11Z"
              fill="#F1F3F8"
            />
          </svg>
          <span>(095) 640-38-82</span>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-display text-2xl font-bold text-sky tracking-widest mt-8 mb-4">
          написати емейл
        </h2>
      </div>
    </div>
  </Layout>
)

export default About
