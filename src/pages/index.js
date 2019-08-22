import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ar.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-full flex flex-col items-center justify-center">
        <div className="flex-grow flex flex-col items-center justify-center">
          <Img className="rounded-full w-40 h-40 border-4 border-white mb-12" fluid={data.placeholderImage.childImageSharp.fluid} />
          <div className="mb-12 text-center">
            <h1 className="text-5xl">Anthony Rimet</h1>
            <h2 className="text-2xl text-gray-700">Développeur web</h2>
          </div>
          <button className="bg-white rounded-full py-3 px-5 font-semibold text-xs focus:outline-none">Découvrez moi</button>
        </div>
        <Nav activeLink='home' />
      </div>
    </Layout>
  )
}

export default IndexPage
