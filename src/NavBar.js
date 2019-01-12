import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

import logo from './media/logo.PNG'

const StyledNavBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0);
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav a {
    margin: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    color: #000;
    letter-spacing: 1.81px;
    line-height: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
  }
  .logo img {
    height: 40px;
    padding: 0 1.5rem 0 0;
  }

`

export default () => (
  <StyledNavBar>
    <div className="logo">
      <img src={logo} alt="Logo" />
      A A B E E  L E E
    </div>
    <nav>
      <Link href="/" to="/">HOME</Link>
      <Link href="/about" to="/about">ABOUT</Link>
      <Link href="/services" to="/services">SERVICES</Link>
      <Link href="/contact" to="/contact">CONTACT</Link>
    </nav>
  </StyledNavBar>
)