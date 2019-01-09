import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

import logo from './media/logo.PNG'

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-bottom: 2px solid #ccc;

  nav a {
    padding: 1.5rem;
    font-size: 1.3rem;
  }

  img {
    height: 90px;
    padding: 0 1.5rem 0 0;
  }
`

export default () => (
  <StyledNavBar>
    <img src={logo} alt="Logo" />
    <nav>
      <Link href="/" to="/">HOME</Link>
      <Link href="/about" to="/about">ABOUT</Link>
      <Link href="/services" to="/services">SERVICES</Link>
      <Link href="/contact" to="/contact">CONTACT</Link>
    </nav>
  </StyledNavBar>
)