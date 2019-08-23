import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

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
      <div className="min-h-screen flex flex-col items-center justify-center overflow-y-scroll">
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-4">
          <Img className="rounded-full mb-4 md:mb-0 md:mr-12 w-20 h-20 border-4 border-white" fluid={data.placeholderImage.childImageSharp.fluid} />
          <div className="">
            <h1 className="text-2xl mb-2 font-semibold">A propos de moi</h1>

            {/* Partie à propos */}
            <div className="text-gray-700 mb-10">
              <p>Salut à tous ! Moi c'est Anthony. Je vis actuellement à Nancy et j'ai 25 ans.<br/>
              Je suis actuellement développeur Front-end chez SmartFizz.<br/>
              Passionné par le développement j'ai fais ce site pour pouvoir tester le framwork Gastby.<br/><br/>
              Si tu es arrivé là c'est que tu t'es perdu sur internet.<br/>
              Mais ce n'est pas grâve, on va s'amuser ensemble. Je t'invite à découvrir mon site ! </p>
            </div>
            <hr/>
            {/* Partie contact*/}
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <p className="font-semibold">anthony.rimet03@gmail.com</p>
                <p className="flex items-center justify-start text-gray-700"><FaEnvelope className="inline mr-1" />Github</p>
              </div>
              <div>
                <p className="font-semibold text-right">000000000</p>
                <p className="flex items-center justify-end text-gray-700"><FaPhone className="inline mr-1" />Téléphone</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <a href="https://github.com/arimet" className="cursor-pointer">
                <p className="font-semibold">arimet</p>
                <p className="flex items-center justify-start text-gray-700"><FaGithub className="inline mr-1" />Github</p>
              </a>
              <a href="https://www.linkedin.com/in/anthonyrimet/">
                <p className="font-semibold text-right">anthony rimet</p>
                <p className="flex items-center justify-end text-gray-700"><FaLinkedin className="inline mr-1" />Linkedin</p>
              </a>
            </div>
          </div>
        </div>
        <Nav activeLink='aboutme' />
      </div>
    </Layout>
  )
}

export default AboutPage
