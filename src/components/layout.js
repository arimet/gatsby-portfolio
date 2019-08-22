/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <main className="w-full h-screen bg-gray-400 customBackground overflow-scroll">{children}</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout