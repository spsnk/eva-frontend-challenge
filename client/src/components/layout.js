/**
 * Layout component to use as page layout
 * @function
 * @param {JSX} children The JSX elements to be contained within the layout
 */

import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"

import Navmenu from "./navmenu"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navmenu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Container fluid as="main">
          {children}
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
