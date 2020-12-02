import React from "react"
import Accordion from "../components/accordion"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import SEO from "../components/seo"
import { AccordionType } from "../components/theme"

const Services = () => {
  const { sky, titlePrimary, contentPrimary, chevronDark } = AccordionType
  return (
    <Layout>
      <SEO title="Послуги" />
      <div className="bg-sky -m-4">
        <div className="mt-24 mb-16 flex justify-center ">
          <h2 className="font-display font-bold text-xl text-primary lowercase leading-relaxed pb-2 border-b-4 border-primary ">
            Наші Послуги
          </h2>
        </div>
        <div className="mb-24 mt-24 lg:mx-12 lg:my-32 lg:mb-64">
          <Accordion
            chevronFill={chevronDark}
            titleColor={titlePrimary}
            contentColor={contentPrimary}
            background={sky}
            title={"Заміри"}
            content={
              "Наші меблі для ванних кімнат виготовляється виключно з вологостійкої ДСП австрійської фірми EGGER і фінської ДСП PUHOS BOARD клас P5. Фасадна частина виконується з МДФ 19 мм, покритого емаллю (будь-який колір згідно RAL), шпоном, плівкою або скло в алюмінієвій рамці."
            }
          />
          <br />
          <Accordion
            chevronFill={chevronDark}
            titleColor={titlePrimary}
            contentColor={contentPrimary}
            background={sky}
            title={"Проектування"}
            content={
              "Наші меблі для ванних кімнат виготовляється виключно з вологостійкої ДСП австрійської фірми EGGER і фінської ДСП PUHOS BOARD клас P5. Фасадна частина виконується з МДФ 19 мм, покритого емаллю (будь-який колір згідно RAL), шпоном, плівкою або скло в алюмінієвій рамці."
            }
          />
          <br />
          <Accordion
            chevronFill={chevronDark}
            titleColor={titlePrimary}
            contentColor={contentPrimary}
            background={sky}
            title={"Виробництво"}
            content={
              "Наші меблі для ванних кімнат виготовляється виключно з вологостійкої ДСП австрійської фірми EGGER і фінської ДСП PUHOS BOARD клас P5. Фасадна частина виконується з МДФ 19 мм, покритого емаллю (будь-який колір згідно RAL), шпоном, плівкою або скло в алюмінієвій рамці."
            }
          />
          <br />
          <Accordion
            chevronFill={chevronDark}
            titleColor={titlePrimary}
            contentColor={contentPrimary}
            background={sky}
            title={"Монтаж"}
            content={
              "Наші меблі для ванних кімнат виготовляється виключно з вологостійкої ДСП австрійської фірми EGGER і фінської ДСП PUHOS BOARD клас P5. Фасадна частина виконується з МДФ 19 мм, покритого емаллю (будь-який колір згідно RAL), шпоном, плівкою або скло в алюмінієвій рамці."
            }
          />
        </div>
      </div>
      <div className="bg-secondary -m-4">
        <div className="mt-24 flex justify-center pb-4 lg:p-12">
          <h2 className="font-display font-bold text-xl text-primary lowercase leading-relaxed pb-2 pt-12 border-b-4 border-primary">
            Процес
          </h2>
        </div>
        <div className="p-4 pt-8 font-display font-normal text-sm tracking-widest leading-8 lg:p-12 lg:leading-9">
          <p>
            Ми виробляємо вологостійкі меблі для ванних кімнат на замовлення
            Індивідуальні меблі для ванної виконується з вологостійких ДСП
            австрійської фірми EGGER і фінської ДСП PUHOS BOARD клас P5 високої
            якості.
            <br />
            Від звичайної вологостійка ДСП D (деревно-стружкові плити)
            відрізняється тим, що при її виготовленні до складу сполучного
            вводять не звичайні карбамідо-формальдегідні смоли, а
            сечовини-меламінові. Їх розпізнавальним кольором на зрізі є зелений.
            <br />
            Таку плиту можна з успіхом застосовувати практично в будь-яких
            атмосферних умовах з підвищеною вологістю з гарантією збереження
            якості плити, тобто, без розбухання і зміни форми і геометричних
            розмірів.
            <br />
            Крім того, готові плити перевіряються на відповідність стандарту EN
            312, який регламентує товщину, щільність, межі міцності при вигині і
            розтягуванні, А плити, покриті меламіном, очікує ще й перевірка
            покриття: аналізується його відтінок, ступінь глянцю, паростойкость,
            схильність до утворення тріщин, щільність, світлонепроникність і
            інші показники. Крім того, вологостійкі плити піддаються контролю за
            властивостями розбухання і проходять випробування по тесту V313:
            спочатку зразки розмочують у водес температурою + 20 ° С - протягом
            трьох днів; потім заморожують при температурі -12 ° С-на один день.
            <br />
            І, нарешті, основна перевага вологостійкої ДСП - її здатність до
            експлуатації в умовах підвищеної вологості. Індивідуальні меблі для
            ванної оснащується, на Ваш вибір, високоякісними комплектуючими і
            фурнітурою кращих європейських виробників: Blum, FGV, Siso, Graas,
            Hettich.
            <br />
            Фасадна частина виконується з МДФ 19мм, покритого емаллю (будь-який
            колір згідно RAL), шпоном, плівкою або скло в алюмінієвій рамці.
            Форма фасадів виготовлених з МДФ - підбирається суто індивідуально.
            <br />
            Використовуються дзеркальні полотна, що володіють підвищеною
            вологостійкістю, з амальгамою на основі срібла. Грані всіх дзеркал в
            обов'язковому порядку відполіровані або декоративно і безпечно
            оброблені (наприклад. Фацет по периметру дзеркала). Може наноситися
            малюнок.
          </p>
        </div>
        <div className="flex justify-center mt-8 pb-32">
          <button
            onClick={() => navigate("/contact")}
            className="uppercase text-primary font-display rounded-sm bg-light p-2 text-center mx-auto my-0 mt-12 mb-12 hover:bg-primary hover:text-light"
          >
            <span className="font-bold tracking-widest text-sm p-8 ">
              Звя'затися
            </span>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Services
