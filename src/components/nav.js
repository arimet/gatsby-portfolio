import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Nav = ({ activeLink }) => (
  <div className="flex items-center justify-between">
    <AniLink swipe direction="right" to="/">
      <div className={"ar-nav " + (activeLink === 'home' ? '' : 'text-gray-600' )}>
        <p>Home</p>
        <p>&bull;</p>
      </div>
    </AniLink>

    <AniLink swipe direction="up" to="/about">
      <div className={"ar-nav " + (activeLink === 'aboutme' ? '' : 'text-gray-600' )}>
        <p>A propos</p>
        <p>&bull;</p>
      </div>
    </AniLink>

    <AniLink swipe direction="left" to="/works">
      <div className={"ar-nav " + (activeLink === 'works' ? '' : 'text-gray-600' )}>
        <p>Expérience</p>
        <p>&bull;</p>
      </div>
    </AniLink>

    <AniLink swipe direction="down" to="/portfolio">
      <div className={"ar-nav " + (activeLink === 'portfolio' ? '' : 'text-gray-600' )}>
        <p>Portfolio</p>
        <p>&bull;</p>
      </div>
    </AniLink>
  </div>
)

Nav.propTypes = {
  activeLink: PropTypes.string,
}

Nav.defaultProps = {
  activeLink: ``,
}

export default Nav
