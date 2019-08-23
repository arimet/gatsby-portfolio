import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Nav = ({ activeLink }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between">
    <Link to="/">
      <div className={"ar-nav " + (activeLink === 'home' ? '' : 'text-gray-600' )}>
        <p>Home</p>
        <p>&bull;</p>
      </div>
    </Link>

    <Link to="/about">
      <div className={"ar-nav " + (activeLink === 'aboutme' ? '' : 'text-gray-600' )}>
        <p>A propos</p>
        <p>&bull;</p>
      </div>
    </Link>

    <Link to="/works">
      <div className={"ar-nav " + (activeLink === 'works' ? '' : 'text-gray-600' )}>
        <p>Expérience</p>
        <p>&bull;</p>
      </div>
    </Link>
    <div className={"ar-nav " + (activeLink === 'skills' ? '' : 'text-gray-600' )}>
      <p>Compétences</p>
      <p>&bull;</p>
    </div>
    <div className={"ar-nav " + (activeLink === 'blog' ? '' : 'text-gray-600' )}> 
      <p>Blog</p>
      <p>&bull;</p>
    </div>
  </div>
)

Nav.propTypes = {
  activeLink: PropTypes.string,
}

Nav.defaultProps = {
  activeLink: ``,
}

export default Nav
