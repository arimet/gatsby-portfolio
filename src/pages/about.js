import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const AboutPage = () => {
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
      <SEO title="A propos" />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-4">
          <Img className="rounded-full mb-4 md:mb-0 md:mr-12 w-20 h-20 border-4 border-white" fluid={data.placeholderImage.childImageSharp.fluid} />
          <div className="">
            <h1 className="text-2xl mb-2">A propos de moi</h1>
            <div className="text-gray-700">
              <p>Salut à tous ! Moi c'est Anthony. Je vis actuellement à Nancy et j'ai 25 ans.<br/>
              Je suis actuellement développeur Front-end chez SmartFizz.<br/>
              Passionné par le développement j'ai fais ce site pour pouvoir tester le framwork Gastby.<br/>
              Si tu es arrivé là c'est que tu t'es perdu sur internet.<br/>
              Mais ce n'est pas grâve, on va s'amuser ensemble. Je t'invite à découvrir mon site ! </p>
            </div>
          </div>
        </div>
        <Nav activeLink='aboutme' />
      </div>
    </Layout>
  )
}

export default AboutPage
