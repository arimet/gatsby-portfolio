import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import CardFolio from "../components/cardFolio";

export const AllFolioQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            path
            image
            techno
          }
        }
      }
    }
  }
`

const Portfolio = ({data}) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className=" flex flex-1 flex-wrap -mx-1 lg:-mx-4 container overflow-scroll p-10">
        
        { 
          data.allMarkdownRemark.edges.map(folio => {
            const { title, description, path, image, techno } = folio.node.frontmatter;
            return (
              <CardFolio
                title={title}
                description={description}
                path={path}
                image={image}
                techno={techno}
                key={`${title}`}
              />
            )
          })
        }
        </div>
        <Nav activeLink='portfolio' />
      </div>
    </Layout>
  )
}

export default Portfolio
