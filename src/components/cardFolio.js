import React from "react";
import "../css/portfolio.css"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const CardFolio = ({ title, description, path, image, techno }) => (
  
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <AniLink swipe direction="up" to={`/${path}`}>
      <article className="overflow-hidden rounded-lg shadow-lg bg-white">

        <div>
            <img alt="Placeholder" className="block h-auto ar-img-cardfolio w-full" src={ image }/>
        </div>

        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <span className="no-underline hover:underline text-black">
                { title }
              </span>
            </h1>
        </div>

        <p className="text-gray-700 text-base leading-tight p-2 md:p-4">
          { description}
        </p>

        <div className="px-6 py-4">
        {techno ? techno.split(",").map(function(tech, i) {
            return <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{tech}</span>
        }) : ''}
        </div>

      </article>
      </AniLink>
    </div>
 
);

export default CardFolio;