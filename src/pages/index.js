import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { AccordionType } from "../components/theme"

import SEO from "../components/seo"
import Accordion from "../components/accordion"

const IndexPage = () => {
  const { dark, titleLight, contentLight, chevronLight } = AccordionType
  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid ">
        <div className=" pt-12 text-primary lg:m-12">
          <h1 className="font-display text-4xl font-bold leading-12 lg:text-5xl lg:leading-16 lg:text-center">
            Проектування і виготовлення вологостійких меблів для ванних кімнат
          </h1>
        </div>
        <div className="mt-6 max-h-96 overflow-hidden lg:m-8">
          <img
            className="h-full w-full object-cover"
            src="https://source.unsplash.com/user/misterdoulou"
            alt="bathroom"
          />
        </div>
        <div className=" text-primary text-center mt-6 lg:m-12">
          <p className="font-display font-medium text-sm leading-8 lg:text-lg lg:leading-12">
            Ванна кімната - дуже важливе місце в квартирі. Тут ми розслабляємося
            вечорами після важкого трудового дня або опоряджаємося з ранку.
            Водні процедури повинні приносити емоційне і естетичне задоволення.
            Домогтися цього легко за допомогою правильного інтер'єру у ванній
            кімнаті.
          </p>
        </div>
        <div className="text-center mt-4 mb-16">
          <button
            className="text-light font-display rounded-sm bg-primary p-2 text-center mx-auto my-0 mt-12 mb-12 hover:bg-secondary hover:text-primary"
            onClick={() => navigate("/works")}
          >
            <span className="uppercase font-bold tracking-widest text-sm p-1">
              Дo галереї робіт
            </span>
          </button>
        </div>
        <div className="bg-light -m-4 grid lg:grid-cols-3 gap-6 pb-16">
          <div className="flex flex-col items-center mt-12 p-4 lg:my-32">
            <div className="mb-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.125 22.5C28.125 28.7135 24.2135 32.625 18 32.625C11.7865 32.625 7.875 28.7135 7.875 22.5C7.875 15.8323 15.1334 6.83089 17.3595 4.22722C17.4387 4.13471 17.537 4.06045 17.6476 4.00953C17.7582 3.95862 17.8786 3.93225 18.0004 3.93225C18.1221 3.93225 18.2425 3.95862 18.3531 4.00953C18.4637 4.06045 18.562 4.13471 18.6412 4.22722C20.8666 6.83089 28.125 15.8323 28.125 22.5Z"
                  stroke="#393B44"
                  strokeWidth="2"
                  strokeMiterLimit="10"
                />
                <path
                  d="M24.1875 23.0625C24.1875 24.4052 23.6541 25.6928 22.7047 26.6422C21.7553 27.5916 20.4677 28.125 19.125 28.125"
                  stroke="#393B44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-display font-bold text-2xl text-primary justify-center mb-6">
              <h2 className="lowercase">Вологостійкість</h2>
            </div>
            <div className="text-center leading-loose font-display font-medium text-sm text-secondary items-center">
              <p>
                Меблі для ванної, що здатні витримувати протягом багатьох років
                підвищену (а інколи і екстремальну) вологість і не втрачати
                зовнішній вигляд і функціональність
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8  p-4 lg:my-32">
            <div className="mb-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M2.25 27.0003C2.25194 27.9449 2.45337 28.8785 2.84111 29.7399C3.22884 30.6012 3.79415 31.371 4.5 31.9988V34.8753C4.5 35.1736 4.61853 35.4598 4.8295 35.6708C5.04048 35.8818 5.32663 36.0003 5.625 36.0003H7.875C8.17337 36.0003 8.45952 35.8818 8.6705 35.6708C8.88147 35.4598 9 35.1736 9 34.8753V33.7503H27V34.8753C27 35.1736 27.1185 35.4598 27.3295 35.6708C27.5405 35.8818 27.8266 36.0003 28.125 36.0003H30.375C30.6734 36.0003 30.9595 35.8818 31.1705 35.6708C31.3815 35.4598 31.5 35.1736 31.5 34.8753V31.9988C32.2059 31.371 32.7712 30.6012 33.1589 29.7399C33.5466 28.8785 33.7481 27.9449 33.75 27.0003V23.6253H2.25V27.0003ZM34.875 18.0003H5.625V4.86942C5.62564 4.57416 5.71371 4.2857 5.8781 4.04042C6.04248 3.79515 6.27582 3.60405 6.54869 3.49124C6.82155 3.37842 7.12171 3.34894 7.41131 3.40651C7.70091 3.46408 7.96697 3.60613 8.17594 3.81473L9.53086 5.16895C8.60766 7.26989 8.99578 9.32513 10.137 10.775L10.125 10.7869C9.91483 10.9978 9.79681 11.2834 9.79681 11.5811C9.79681 11.8788 9.91483 12.1644 10.125 12.3753L10.9202 13.1705C11.0247 13.275 11.1487 13.3579 11.2852 13.4145C11.4218 13.471 11.5681 13.5001 11.7158 13.5001C11.8636 13.5001 12.0099 13.471 12.1464 13.4145C12.2829 13.3579 12.4069 13.275 12.5114 13.1705L19.9202 5.76169C20.0247 5.65722 20.1076 5.53319 20.1642 5.39668C20.2207 5.26017 20.2498 5.11386 20.2498 4.9661C20.2498 4.81834 20.2207 4.67203 20.1642 4.53552C20.1076 4.39902 20.0247 4.27499 19.9202 4.17052L19.125 3.37528C18.914 3.16446 18.628 3.04604 18.3298 3.04604C18.0315 3.04604 17.7455 3.16446 17.5345 3.37528L17.5226 3.38723C16.0727 2.24606 14.0189 1.85794 11.9166 2.78114L10.5623 1.42622C9.88138 0.745177 9.01375 0.281371 8.06917 0.0934613C7.1246 -0.0944488 6.14552 0.00197706 5.25575 0.370544C4.36598 0.739111 3.60549 1.36326 3.07047 2.16406C2.53545 2.96486 2.24992 3.90634 2.25 4.86942V18.0003H1.125C0.826631 18.0003 0.540483 18.1188 0.329505 18.3298C0.118526 18.5408 0 18.8269 0 19.1253L0 20.2503C0 20.5487 0.118526 20.8348 0.329505 21.0458C0.540483 21.2568 0.826631 21.3753 1.125 21.3753H34.875C35.1734 21.3753 35.4595 21.2568 35.6705 21.0458C35.8815 20.8348 36 20.5487 36 20.2503V19.1253C36 18.8269 35.8815 18.5408 35.6705 18.3298C35.4595 18.1188 35.1734 18.0003 34.875 18.0003Z"
                    fill="#393B44"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="font-display font-bold text-2xl text-primary justify-center mb-6">
              <h2 className="lowercase">Практичність</h2>
            </div>
            <div className="text-center leading-loose font-display font-medium text-sm text-secondary items-center">
              <p>
                Меблі для ванної, що витримують активну експлуатацію всіма
                членами сім’ї
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 mb-6 p-4 lg:my-32">
            <div className="mb-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4492 9.97034C31.978 8.87922 31.2985 7.89045 30.4488 7.0594C29.5985 6.22587 28.596 5.56347 27.4957 5.10823C26.3548 4.6343 25.1311 4.39171 23.8957 4.39456C22.1625 4.39456 20.4715 4.86917 19.002 5.76565C18.6504 5.9801 18.3164 6.21565 18 6.47229C17.6836 6.21565 17.3496 5.9801 16.998 5.76565C15.5285 4.86917 13.8375 4.39456 12.1043 4.39456C10.8562 4.39456 9.64687 4.63362 8.5043 5.10823C7.40039 5.56526 6.40547 6.22268 5.55117 7.0594C4.70038 7.88952 4.02074 8.87851 3.55078 9.97034C3.06211 11.1059 2.8125 12.3117 2.8125 13.5528C2.8125 14.7235 3.05156 15.9434 3.52617 17.1844C3.92344 18.2215 4.49297 19.2973 5.2207 20.3836C6.37383 22.1028 7.95937 23.8957 9.92812 25.7133C13.1906 28.7262 16.4215 30.8074 16.5586 30.8918L17.3918 31.4262C17.7609 31.6617 18.2355 31.6617 18.6047 31.4262L19.4379 30.8918C19.575 30.8039 22.8023 28.7262 26.0684 25.7133C28.0371 23.8957 29.6227 22.1028 30.7758 20.3836C31.5035 19.2973 32.0766 18.2215 32.4703 17.1844C32.9449 15.9434 33.184 14.7235 33.184 13.5528C33.1875 12.3117 32.9379 11.1059 32.4492 9.97034ZM18 28.6453C18 28.6453 5.48438 20.6262 5.48438 13.5528C5.48438 9.97034 8.44805 7.06643 12.1043 7.06643C14.6742 7.06643 16.9031 8.50081 18 10.5961C19.0969 8.50081 21.3258 7.06643 23.8957 7.06643C27.552 7.06643 30.5156 9.97034 30.5156 13.5528C30.5156 20.6262 18 28.6453 18 28.6453Z"
                  fill="#393B44"
                />
              </svg>
            </div>
            <div className="font-display font-bold text-2xl text-primary justify-center mb-6">
              <h2 className="lowercase">Естетичність</h2>
            </div>
            <div className="text-center leading-loose font-display font-medium text-sm text-secondary items-center mb-12">
              <p>
                Тому в меблів для ванних повинні поєднуватися місткість і
                легкість, красу і функціональність, зручність і надійність.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-primary -m-4 ">
          <div className="mt-24 mb-16 flex justify-center md:mb-24">
            <h2 className="font-display font-bold text-xl text-light lowercase leading-relaxed pb-2 border-b-4 border-light ">
              Наші Переваги
            </h2>
          </div>
          <div className="md:m-32">
            <Accordion
              chevronFill={chevronLight}
              titleColor={titleLight}
              contentColor={contentLight}
              background={dark}
              title={"Матеріали"}
              content={
                "Наші меблі для ванних кімнат виготовляється виключно з вологостійкої ДСП австрійської фірми EGGER і фінської ДСП PUHOS BOARD клас P5. Фасадна частина виконується з МДФ 19 мм, покритого емаллю (будь-який колір згідно RAL), шпоном, плівкою або скло в алюмінієвій рамці."
              }
            />
            <Accordion
              titleColor={titleLight}
              contentColor={contentLight}
              chevronFill={chevronLight}
              background={dark}
              title={"Фурнітура"}
              content={
                "Надійна фурнітура від європейських виробників Blum, FGV, Siso, Graas, Hettich забезпечує довгу і надійну роботу всіх рухомих частин конструкції."
              }
            />
            <Accordion
              titleColor={titleLight}
              contentColor={contentLight}
              chevronFill={chevronLight}
              background={dark}
              title={"Проектування"}
              content={
                "Ми можемо розробити для Вас свій дизайн меблів або підправити дизайн меблів з каталогу, підганяючи його до розмірів Вашої ванної, до кольорової гами і стилю обраної плитки."
              }
            />
            <Accordion
              titleColor={titleLight}
              contentColor={contentLight}
              chevronFill={chevronLight}
              background={dark}
              title={"Індивідуальний підхід"}
              content={
                "Ви маєте можливість самостійно або з нашою допомогою вибрати фурнітуру і форму фасадів, колір корпусу і вид ручок, конструкцію і наповнення Ваших меблів."
              }
            />
          </div>

          <div className="flex justify-center mt-8 mb-32">
            <button
              onClick={() => navigate("/contact")}
              className="uppercase text-primary font-display rounded-sm bg-light p-2 text-center mx-auto my-0 mt-12 mb-12 hover:bg-secondary hover:text-light"
            >
              <span className="font-bold tracking-widest text-sm p-8 ">
                Замовити
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
