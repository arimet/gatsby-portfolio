import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Folio from "../components/folio";

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
        <div className=" flex flex-1 flex-col container overflow-scroll m-10">
        { 
          data.allMarkdownRemark.edges.map(folio => {
            const { title, description, path, image } = folio.node.frontmatter;

            return (
              <Folio
                title={title}
                description={description}
                path={path}
                image={image}
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
