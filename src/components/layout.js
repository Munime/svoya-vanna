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
        <footer>
          © {new Date().getFullYear()}, Cretated by{" "}
          <a href="https://github.com/Munime">Andrew AJ</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
