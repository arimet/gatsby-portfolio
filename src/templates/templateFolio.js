import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout";

export const postQuery = graphql`
  query FolioPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        title
        description
        path
        image
        techno
      }
      html
    }
  }
`;

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, image, description } = post.frontmatter;
  
  return (
    <Layout>
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
		
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <span className="text-base md:text-sm text-teal-500 font-bold">&lt;</span> <AniLink swipe direction="down" to={`/portfolio`} className="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline">RETOUR AU PORTFOLIO</AniLink>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{ title }</h1>
          </div>
      
          <p className="py-6">
            <span role="img" aria-label="wawe">👋</span> { description }
          </p>

          <div className="">
            <img alt="Placeholder" className="block h-auto ar-img-portfolio w-full" src={ image }/>
          </div>

          <p className="py-6" dangerouslySetInnerHTML={{ __html: post.html }}></p>
                          
        </div>
      </div> 
    </Layout>
  )
};

