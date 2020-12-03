import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      {/* <Header siteTitle={data.site.siteMetadata?.title || "Title"} /> */}
      <div>
        <main className=" bg-sky p-4">{children}</main>
        <footer className="bg-secondary grid">
          <div className="flex flex-col justify-center items-center">
            <div className="p-8">
              <h2 className="font-display font-bold text-xl text-light lowercase leading-relaxed tracking-widest ">
                Тримай зв'язок
              </h2>
            </div>
            <div className="flex flex-row justify-between w-full font-latin text-light tracking-widest px-20 py-2 my-2 hover:bg-sky ">
              <p>Viber</p>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0273 19.2495C20.9064 20.2404 19.282 20.9511 17.154 21.3816C15.026 21.8121 12.833 21.9379 10.575 21.7593L6.28655 24.9756V20.9552C4.87329 20.5166 3.76868 19.948 2.97271 19.2495C2.03054 18.4211 1.29955 17.2312 0.779727 15.6798C0.259909 14.1285 0 12.5447 0 10.9284C0 9.31205 0.259909 7.72823 0.779727 6.1769C1.29955 4.62557 2.0346 3.43161 2.98489 2.59503C3.93519 1.75845 5.29565 1.1168 7.06628 0.670078C8.83691 0.223359 10.6481 0 12.5 0C14.3519 0 16.1631 0.223359 17.9337 0.670078C19.7044 1.1168 21.0648 1.75845 22.0151 2.59503C22.9654 3.43161 23.7005 4.62557 24.2203 6.1769C24.7401 7.72823 25 9.31205 25 10.9284C25 12.5447 24.7401 14.1285 24.2203 15.6798C23.7005 17.2312 22.9695 18.4211 22.0273 19.2495ZM15.5702 13.2797L17.154 13.5478C17.024 11.5984 16.2727 9.9334 14.9001 8.55263C13.5275 7.17186 11.8665 6.4165 9.91715 6.28655L10.1852 7.87037C11.5822 8.04906 12.7843 8.64198 13.7914 9.64912C14.7986 10.6563 15.3915 11.8665 15.5702 13.2797ZM10.4532 9.50292L10.7456 11.2573C11.3954 11.5822 11.8746 12.0614 12.1832 12.6949L13.9376 12.9873C13.7427 12.1264 13.3285 11.3832 12.6949 10.7578C12.0614 10.1324 11.3142 9.7141 10.4532 9.50292ZM7.846 10.9405V9.38109C7.846 9.10494 7.74448 8.82878 7.54142 8.55263C7.33837 8.27648 7.12313 8.07749 6.89571 7.95565C6.66829 7.83382 6.49773 7.82164 6.38402 7.9191L5.26316 9.06433C4.62963 9.69786 4.53622 10.6847 4.98294 12.0249C5.42966 13.365 6.28249 14.6646 7.54142 15.9235C8.80036 17.1824 10.0999 18.0352 11.4401 18.482C12.7802 18.9287 13.7589 18.8353 14.3762 18.2018L15.5214 17.0565C15.6352 16.9591 15.6311 16.7926 15.5093 16.557C15.3874 16.3215 15.1884 16.1062 14.9123 15.9113C14.6361 15.7164 14.36 15.6189 14.0838 15.6189H12.5244L11.6228 16.3986C10.9081 16.2037 10.0187 15.5742 8.95468 14.5102C7.89068 13.4462 7.26121 12.5487 7.06628 11.8177L7.846 10.9405ZM9.40546 3.14327L9.64912 4.7271C11.2736 4.75958 12.7762 5.186 14.1569 6.00634C15.5377 6.82667 16.6342 7.92316 17.4464 9.29581C18.2586 10.6685 18.6891 12.167 18.7378 13.7914L20.3216 14.0595C20.3216 12.5812 20.0333 11.168 19.4566 9.81969C18.88 8.47141 18.1043 7.30994 17.1296 6.33528C16.155 5.36062 14.9935 4.58496 13.6452 4.00828C12.2969 3.43161 10.8837 3.14327 9.40546 3.14327Z"
                  fill="#D6E0F0"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between w-full font-latin text-light tracking-widest px-20 py-2 my-2 hover:bg-sky ">
              <p>Telegram</p>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C5.59436 0 0 5.59516 0 12.5C0 19.4048 5.59516 25 12.5 25C19.4056 25 25 19.4048 25 12.5C25 5.59516 19.4048 0 12.5 0ZM18.6395 8.56371L16.5879 18.2315C16.4363 18.9169 16.0282 19.0831 15.4589 18.7605L12.3339 16.4573L10.8266 17.9089C10.6605 18.075 10.5194 18.2161 10.1968 18.2161L10.4185 15.0355L16.2097 9.80323C16.4621 9.58145 16.154 9.45565 15.821 9.67742L8.66371 14.1831L5.57903 13.2202C4.90887 13.0089 4.89355 12.55 5.72016 12.2274L17.7718 7.57984C18.3315 7.37823 18.8202 7.71613 18.6387 8.5629L18.6395 8.56371Z"
                  fill="#D6E0F0"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between w-full font-latin text-light tracking-widest px-20 py-2 my-2 hover:bg-sky ">
              <p>Messanger</p>
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8164 15.6738L10.5839 12.315L4.35628 15.7584L11.1824 8.51558L14.4149 11.8743L20.6399 8.43098L13.8151 15.6738H13.8164ZM12.4994 0C5.59624 0 0 5.23259 0 11.6887C0 15.3606 1.8107 18.6373 4.64417 20.7801V25.2538L8.90954 22.8875C10.046 23.2057 11.2518 23.3774 12.4994 23.3774C19.4038 23.3774 25 18.1436 25 11.6887C25 5.23259 19.4038 0 12.4994 0Z"
                  fill="#D6E0F0"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between w-full font-latin text-light tracking-widest px-20 py-2 my-2 hover:bg-sky ">
              <p>Email</p>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4514 4.16666C22.3568 4.15691 22.2613 4.15691 22.1667 4.16666H2.72224C2.59762 4.16858 2.47382 4.18727 2.35419 4.22222L12.3889 14.2153L22.4514 4.16666Z"
                  fill="#D6E0F0"
                />
                <path
                  d="M23.4792 5.13194L13.368 15.2014C13.1078 15.4601 12.7558 15.6053 12.3889 15.6053C12.022 15.6053 11.6699 15.4601 11.4097 15.2014L1.38888 5.20833C1.35808 5.32155 1.34174 5.43822 1.34027 5.55555V19.4444C1.34027 19.8128 1.4866 20.1661 1.74707 20.4265C2.00753 20.687 2.3608 20.8333 2.72916 20.8333H22.1736C22.542 20.8333 22.8952 20.687 23.1557 20.4265C23.4162 20.1661 23.5625 19.8128 23.5625 19.4444V5.55555C23.557 5.41087 23.5288 5.26794 23.4792 5.13194ZM3.68055 19.4444H2.71527V18.4514L7.76388 13.4444L8.74305 14.4236L3.68055 19.4444ZM22.1597 19.4444H21.1875L16.125 14.4236L17.1042 13.4444L22.1528 18.4514L22.1597 19.4444Z"
                  fill="#D6E0F0"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between w-full font-latin text-light tracking-widest px-20 py-2 my-2 hover:bg-sky ">
              <p>MTC</p>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 24.9984H25V0H0V24.9984Z" fill="#FF0000" />
                <path
                  d="M12.4997 2.56755C16.0525 2.56755 19.849 8.91915 19.849 14.4195C19.849 18.7399 17.3093 22.4255 12.4997 22.4255C7.68658 22.4255 5.1535 18.7399 5.1535 14.4195C5.1535 8.91915 8.94649 2.56755 12.4997 2.56755Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between w-full font-latin text-light tracking-widest px-20 py-2 my-2 hover:bg-sky ">
              <p>Kyivstar</p>
              <svg
                width="31"
                height="29"
                viewBox="0 0 31 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.5 2V8.80634Z" fill="black" />
                <path
                  d="M15.5 2V8.80634"
                  stroke="#00A0FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path d="M28 11.0818L21.5268 13.1851Z" fill="black" />
                <path
                  d="M28 11.0818L21.5268 13.1851"
                  stroke="#00A0FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path d="M23.2255 25.7764L19.2248 20.27Z" fill="black" />
                <path
                  d="M23.2255 25.7764L19.2248 20.27"
                  stroke="#00A0FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path d="M7.77454 25.7764L11.7752 20.27Z" fill="black" />
                <path
                  d="M7.77454 25.7764L11.7752 20.27"
                  stroke="#00A0FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path d="M3 11.0818L9.47322 13.1851Z" fill="black" />
                <path
                  d="M3 11.0818L9.47322 13.1851"
                  stroke="#00A0FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center text-light font-latin p-4">
            © {new Date().getFullYear()}, Cretated by{" "}
            <a href="https://github.com/Munime">Andrew AJ</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
